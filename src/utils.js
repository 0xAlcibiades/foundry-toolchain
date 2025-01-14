const os = require("os");

function normalizeVersionName(version) {
  return version.replace(/^nightly-[0-9a-f]{40}$/, "nightly");
}

function mapArch(arch) {
  return "arm64";
}

function getDownloadObject(version) {
  const platform = os.platform();
  const filename = `foundry_${normalizeVersionName(version)}_${platform}_${mapArch(os.arch())}`;
  const extension = platform === "win32" ? "zip" : "tar.gz";
  const url = `https://github.com/foundry-rs/foundry/releases/download/${version}/${filename}.${extension}`;

  return {
    url: "https://github.com/foundry-rs/foundry/releases/download/nightly/foundry_nightly_linux_arm64.tar.gz",
    binPath: ".",
  };
}

module.exports = {
  getDownloadObject,
};
