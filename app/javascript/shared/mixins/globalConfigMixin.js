// export default {
//   methods: {
//     useInstallationName(str = '', installationName) {
//       return str.replace(/chatwoot/g, installationName);
//     },
//   },
// };

export default {
  methods: {
    useInstallationName(str = 'Aligned', installationName) {
      return str.replace(/Aligned/g, installationName);
    },
  },
};
