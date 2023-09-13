let modules = import.meta.glob("@/assets/videos/**/*.mp4", {
  eager: true,
  import: "default",
});
export const newModules = Object.fromEntries(
  Object.entries(modules).map((arr) => {
    arr[0] = arr[0].replace(/\/src\/assets\/videos\/|\.mp4/gi, "");
    return arr;
  })
);
