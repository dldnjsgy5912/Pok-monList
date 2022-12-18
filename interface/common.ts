export interface SAdata {
  length: number;
  map(arg0: (list: SAdata, i: number | string) => JSX.Element): React.ReactNode;
  CDE_GC: string;
  CDE_GB: string;
  CDE_CD: string;
  CDE_NM: string;
  CDE_MD: string;
}
