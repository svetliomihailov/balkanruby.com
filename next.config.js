module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/blog/announcement': { page: '/blog/announcement' },
      '/blog/cfp-time': { page: '/blog/cfp-time' },
      '/blog/introducing-generator': { page: '/blog/introducing-generator' },
      '/sponsors': { page: '/sponsors' },
      '/speakers': { page: '/speakers' },
      '/blog': { page: '/blog' },
      '/tickets': { page: '/tickets' }
    };
  },
};
