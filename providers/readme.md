# Providers

This directory may contain providers which will receive the request and response object from express and the retured object will be forwarded to next provider.
By default the provided will be executed in random order for the incoming request but if you need to maintain order the include a `index.ts` file which expose the ordered provider list.

If not required this directory can be removed.
