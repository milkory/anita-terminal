export type Quality = 'n' | 'r' | 'sr' | 'ssr' | 'ur';

export function sideLocale(side: number) {
  return ['黑月锁链', '科伦巴商会', '曼杜斯帝国', '环大陆铁道联盟', '索思学会', '“园丁”'][side - 1];
}
