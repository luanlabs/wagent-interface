/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const nextConfig = {
  reactStrictMode: true,
  // Emit a minimal standalone server bundle for small, secure Docker images.
  output: 'standalone',
  images: {
    // NOTE: product/merchant logos are returned by the API from an unverified
    // host, so we keep https wildcard matching to avoid breaking them. The
    // insecure `http` wildcard from the original config has been removed to
    // close a plaintext/internal SSRF vector through the image optimizer.
    // RECOMMENDED hardening once the storage host is known: replace the
    // wildcard below with explicit hosts (e.g. static.wagent.app,
    // firebasestorage.googleapis.com, **.googleusercontent.com).
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

export default withPWA(nextConfig);
