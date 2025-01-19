import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const FIRECRAWL_API_KEY = Deno.env.get('FIRECRAWL_API_KEY');
    if (!FIRECRAWL_API_KEY) {
      throw new Error('Firecrawl API key not configured');
    }

    console.log('Starting website scrape with Firecrawl API...');
    
    const requestBody = {
      url: 'https://site.aroofabove.co',
      limit: 50,
      scrapeOptions: {
        formats: ['markdown', 'html'],
        waitForNetworkRequests: true,
        waitTime: 3000
      }
    };

    console.log('Making request to Firecrawl API with body:', JSON.stringify(requestBody));

    // Using native Deno fetch with additional options and better error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      // Test the API endpoint first
      const testResponse = await fetch('https://api.firecrawl.com/v1/health', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
          'User-Agent': 'Deno/1.0'
        },
        signal: controller.signal
      });

      if (!testResponse.ok) {
        console.error('Firecrawl API health check failed:', testResponse.status);
        throw new Error('Firecrawl API is not accessible');
      }

      console.log('Firecrawl API health check passed, proceeding with scrape request');

      // Main scrape request
      const response = await fetch('https://api.firecrawl.com/v1/scrape', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${FIRECRAWL_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Deno/1.0'
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`Firecrawl API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Scrape completed successfully. Response data:', JSON.stringify(data).slice(0, 200) + '...');

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout after 30 seconds');
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });

    return new Response(
      JSON.stringify({ 
        error: error.message || 'An unexpected error occurred',
        details: error.stack,
        cause: error.cause
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});