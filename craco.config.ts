import path from 'path';

const config = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@containers': path.resolve(__dirname, 'src/components/containers/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};

export default config;
