// My hyper-term plugins' settings.

module.exports = {
  config: {
    // ============ plugins configurations here ============
    /** @hyper-material-theme */
    MaterialTheme: {
      // Set the theme variant,
      // OPTIONS: 'Darker', 'Palenight', 'Ocean', ''
      theme: 'Palenight',

      // [Optional] Set the rgba() app background opacity, useful when enableVibrance is true
      // OPTIONS: From 0.1 to 1
      backgroundOpacity: '1',

      // [Optional] Set the accent color for the current active tab
      accentColor: '#64FFDA',

      // [Optional] Mac Only. Need restart. Enable the vibrance and blurred background
      // OPTIONS: 'dark', 'ultra-dark', 'bright'
      // NOTE: The backgroundOpacity should be between 0.1 and 0.9 to see the effect.
      vibrancy: 'dark'
    },

    /** @hyper-opacity */
    opacity: 0.95,
    // ============ plugins configurations here ============
  }
}
