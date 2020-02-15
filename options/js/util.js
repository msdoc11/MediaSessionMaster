const Util = window.Util = {
  get defaultOptions() {
    return {
      enable: true,
      enableExpr: false,
      showNSFWSites: false,
      sites: {
        soundcloud: { enable: true }
      },
      darkTheme: document.querySelector('title').computedStyleMap().get('line-height').value === 1,
    };
  },
  getData() {
    return new Promise(resolve => chrome.storage.sync.get(Util.defaultOptions, resolve));
  },
  setData(data) {
    return new Promise(resolve => chrome.storage.sync.set(data, resolve));
  },
  async ensureSite(site, callback) {
    const data = await Util.getData();
    if(data.sites[site].enable && 'mediaSession' in navigator) callback(data);
  },
};