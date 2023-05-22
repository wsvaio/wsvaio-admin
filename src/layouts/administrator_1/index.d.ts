export type AdministratorProvide = {
  currentActiveMenu: Ref<RouteRecordName | null | undefined>;
  names: ComputedRef<(RouteRecordName | null | undefined)[]>;
  tabs: Set<RouteLocationNormalizedLoaded | RouteRecordRaw>;
}
