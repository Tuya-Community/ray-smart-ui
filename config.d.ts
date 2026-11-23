export interface SmartUIBuildOptions {
  /** mixed retains both renderer implementations; webview excludes the Lynx graph. */
  renderer?: 'mixed' | 'webview';
}
export declare function withSmartUI<T extends object>(config: T, options?: SmartUIBuildOptions): T;

export declare function checkSmartUIHosts(dist: string): number;
