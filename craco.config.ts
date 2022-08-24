import path from 'path';

const config = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@containers': path.resolve(__dirname, 'src/components/containers/'),
    },
  },
};

export default config;
