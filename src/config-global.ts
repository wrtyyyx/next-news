// src/config/config.ts

export type ConfigValue = {
  isStaticExport: boolean
  site: {
    name: string
    serverUrl: string
    assetURL: string
    basePath: string
  }
  auth: {
    method: 'jwt' | 'amplify' | 'firebase' | 'supabase' | 'auth0'
    skip: boolean
    redirectPath: string
  }
  newsdata: {
    apiKey: string
    baseUrl: string
  }
  mapbox: {
    apiKey: string
  }
  firebase: {
    appId: string
    apiKey: string
    projectId: string
    authDomain: string
    storageBucket: string
    measurementId: string
    messagingSenderId: string
  }
  amplify: {
    userPoolId: string
    userPoolWebClientId: string
    region: string
  }
  auth0: {
    clientId: string
    domain: string
    callbackUrl: string
  }
  supabase: {
    url: string
    key: string
  }
}

export const CONFIG: ConfigValue = {
  isStaticExport: process.env.BUILD_STATIC_EXPORT === 'true',

  site: {
    name: 'Newses',
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  },

  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: '/dashboard',
  },

  newsdata: {
    apiKey: process.env.NEXT_PUBLIC_NEWSDATA_API_KEY ?? '',
    baseUrl: process.env.NEXT_PUBLIC_NEWSDATA_BASE_URL ?? 'https://newsdata.io/api/1',
  },

  mapbox: {
    apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '',
  },

  firebase: {
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID ?? '',
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
  },

  amplify: {
    userPoolId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_ID ?? '',
    userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID ?? '',
    region: process.env.NEXT_PUBLIC_AWS_AMPLIFY_REGION ?? '',
  },

  auth0: {
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? '',
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? '',
    callbackUrl: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL ?? '',
  },

  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  },
}
