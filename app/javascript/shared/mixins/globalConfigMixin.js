export default {
  methods: {
    useInstallationName(str = '', installationName) {
      return str.replace(/Aligned/g, 'Aligned');
      // return "Aligned";
    },
  },
};
