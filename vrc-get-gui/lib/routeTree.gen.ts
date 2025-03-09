/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './../app/__root'
import { Route as SetupRouteImport } from './../app/_setup/route'
import { Route as MainRouteImport } from './../app/_main/route'
import { Route as RouteImport } from './../app/route'
import { Route as MainSettingsIndexImport } from './../app/_main/settings/index'
import { Route as MainProjectsIndexImport } from './../app/_main/projects/index'
import { Route as MainLogIndexImport } from './../app/_main/log/index'
import { Route as MainDevPaletteIndexImport } from './../app/_main/dev-palette/index'
import { Route as SetupSetupUnityHubIndexImport } from './../app/_setup/setup/unity-hub/index'
import { Route as SetupSetupSystemSettingIndexImport } from './../app/_setup/setup/system-setting/index'
import { Route as SetupSetupProjectPathIndexImport } from './../app/_setup/setup/project-path/index'
import { Route as SetupSetupFinishIndexImport } from './../app/_setup/setup/finish/index'
import { Route as SetupSetupBackupsIndexImport } from './../app/_setup/setup/backups/index'
import { Route as SetupSetupAppearanceIndexImport } from './../app/_setup/setup/appearance/index'
import { Route as MainSettingsLicensesIndexImport } from './../app/_main/settings/licenses/index'
import { Route as MainProjectsManageIndexImport } from './../app/_main/projects/manage/index'
import { Route as MainPackagesUserPackagesIndexImport } from './../app/_main/packages/user-packages/index'
import { Route as MainPackagesRepositoriesIndexImport } from './../app/_main/packages/repositories/index'
import { Route as MainPackagesPackagesIndexImport } from './../app/_main/packages/packages/index'

// Create/Update Routes

const SetupRouteRoute = SetupRouteImport.update({
  id: '/_setup',
  getParentRoute: () => rootRoute,
} as any)

const MainRouteRoute = MainRouteImport.update({
  id: '/_main',
  getParentRoute: () => rootRoute,
} as any)

const RouteRoute = RouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MainSettingsIndexRoute = MainSettingsIndexImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => MainRouteRoute,
} as any)

const MainProjectsIndexRoute = MainProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => MainRouteRoute,
} as any)

const MainLogIndexRoute = MainLogIndexImport.update({
  id: '/log/',
  path: '/log/',
  getParentRoute: () => MainRouteRoute,
} as any)

const MainDevPaletteIndexRoute = MainDevPaletteIndexImport.update({
  id: '/dev-palette/',
  path: '/dev-palette/',
  getParentRoute: () => MainRouteRoute,
} as any)

const SetupSetupUnityHubIndexRoute = SetupSetupUnityHubIndexImport.update({
  id: '/setup/unity-hub/',
  path: '/setup/unity-hub/',
  getParentRoute: () => SetupRouteRoute,
} as any)

const SetupSetupSystemSettingIndexRoute =
  SetupSetupSystemSettingIndexImport.update({
    id: '/setup/system-setting/',
    path: '/setup/system-setting/',
    getParentRoute: () => SetupRouteRoute,
  } as any)

const SetupSetupProjectPathIndexRoute = SetupSetupProjectPathIndexImport.update(
  {
    id: '/setup/project-path/',
    path: '/setup/project-path/',
    getParentRoute: () => SetupRouteRoute,
  } as any,
)

const SetupSetupFinishIndexRoute = SetupSetupFinishIndexImport.update({
  id: '/setup/finish/',
  path: '/setup/finish/',
  getParentRoute: () => SetupRouteRoute,
} as any)

const SetupSetupBackupsIndexRoute = SetupSetupBackupsIndexImport.update({
  id: '/setup/backups/',
  path: '/setup/backups/',
  getParentRoute: () => SetupRouteRoute,
} as any)

const SetupSetupAppearanceIndexRoute = SetupSetupAppearanceIndexImport.update({
  id: '/setup/appearance/',
  path: '/setup/appearance/',
  getParentRoute: () => SetupRouteRoute,
} as any)

const MainSettingsLicensesIndexRoute = MainSettingsLicensesIndexImport.update({
  id: '/settings/licenses/',
  path: '/settings/licenses/',
  getParentRoute: () => MainRouteRoute,
} as any)

const MainProjectsManageIndexRoute = MainProjectsManageIndexImport.update({
  id: '/projects/manage/',
  path: '/projects/manage/',
  getParentRoute: () => MainRouteRoute,
} as any)

const MainPackagesUserPackagesIndexRoute =
  MainPackagesUserPackagesIndexImport.update({
    id: '/packages/user-packages/',
    path: '/packages/user-packages/',
    getParentRoute: () => MainRouteRoute,
  } as any)

const MainPackagesRepositoriesIndexRoute =
  MainPackagesRepositoriesIndexImport.update({
    id: '/packages/repositories/',
    path: '/packages/repositories/',
    getParentRoute: () => MainRouteRoute,
  } as any)

const MainPackagesPackagesIndexRoute = MainPackagesPackagesIndexImport.update({
  id: '/packages/packages/',
  path: '/packages/packages/',
  getParentRoute: () => MainRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof RouteImport
      parentRoute: typeof rootRoute
    }
    '/_main': {
      id: '/_main'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainRouteImport
      parentRoute: typeof rootRoute
    }
    '/_setup': {
      id: '/_setup'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SetupRouteImport
      parentRoute: typeof rootRoute
    }
    '/_main/dev-palette/': {
      id: '/_main/dev-palette/'
      path: '/dev-palette'
      fullPath: '/dev-palette'
      preLoaderRoute: typeof MainDevPaletteIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/log/': {
      id: '/_main/log/'
      path: '/log'
      fullPath: '/log'
      preLoaderRoute: typeof MainLogIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/projects/': {
      id: '/_main/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof MainProjectsIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/settings/': {
      id: '/_main/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof MainSettingsIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/packages/packages/': {
      id: '/_main/packages/packages/'
      path: '/packages/packages'
      fullPath: '/packages/packages'
      preLoaderRoute: typeof MainPackagesPackagesIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/packages/repositories/': {
      id: '/_main/packages/repositories/'
      path: '/packages/repositories'
      fullPath: '/packages/repositories'
      preLoaderRoute: typeof MainPackagesRepositoriesIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/packages/user-packages/': {
      id: '/_main/packages/user-packages/'
      path: '/packages/user-packages'
      fullPath: '/packages/user-packages'
      preLoaderRoute: typeof MainPackagesUserPackagesIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/projects/manage/': {
      id: '/_main/projects/manage/'
      path: '/projects/manage'
      fullPath: '/projects/manage'
      preLoaderRoute: typeof MainProjectsManageIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_main/settings/licenses/': {
      id: '/_main/settings/licenses/'
      path: '/settings/licenses'
      fullPath: '/settings/licenses'
      preLoaderRoute: typeof MainSettingsLicensesIndexImport
      parentRoute: typeof MainRouteImport
    }
    '/_setup/setup/appearance/': {
      id: '/_setup/setup/appearance/'
      path: '/setup/appearance'
      fullPath: '/setup/appearance'
      preLoaderRoute: typeof SetupSetupAppearanceIndexImport
      parentRoute: typeof SetupRouteImport
    }
    '/_setup/setup/backups/': {
      id: '/_setup/setup/backups/'
      path: '/setup/backups'
      fullPath: '/setup/backups'
      preLoaderRoute: typeof SetupSetupBackupsIndexImport
      parentRoute: typeof SetupRouteImport
    }
    '/_setup/setup/finish/': {
      id: '/_setup/setup/finish/'
      path: '/setup/finish'
      fullPath: '/setup/finish'
      preLoaderRoute: typeof SetupSetupFinishIndexImport
      parentRoute: typeof SetupRouteImport
    }
    '/_setup/setup/project-path/': {
      id: '/_setup/setup/project-path/'
      path: '/setup/project-path'
      fullPath: '/setup/project-path'
      preLoaderRoute: typeof SetupSetupProjectPathIndexImport
      parentRoute: typeof SetupRouteImport
    }
    '/_setup/setup/system-setting/': {
      id: '/_setup/setup/system-setting/'
      path: '/setup/system-setting'
      fullPath: '/setup/system-setting'
      preLoaderRoute: typeof SetupSetupSystemSettingIndexImport
      parentRoute: typeof SetupRouteImport
    }
    '/_setup/setup/unity-hub/': {
      id: '/_setup/setup/unity-hub/'
      path: '/setup/unity-hub'
      fullPath: '/setup/unity-hub'
      preLoaderRoute: typeof SetupSetupUnityHubIndexImport
      parentRoute: typeof SetupRouteImport
    }
  }
}

// Create and export the route tree

interface MainRouteRouteChildren {
  MainDevPaletteIndexRoute: typeof MainDevPaletteIndexRoute
  MainLogIndexRoute: typeof MainLogIndexRoute
  MainProjectsIndexRoute: typeof MainProjectsIndexRoute
  MainSettingsIndexRoute: typeof MainSettingsIndexRoute
  MainPackagesPackagesIndexRoute: typeof MainPackagesPackagesIndexRoute
  MainPackagesRepositoriesIndexRoute: typeof MainPackagesRepositoriesIndexRoute
  MainPackagesUserPackagesIndexRoute: typeof MainPackagesUserPackagesIndexRoute
  MainProjectsManageIndexRoute: typeof MainProjectsManageIndexRoute
  MainSettingsLicensesIndexRoute: typeof MainSettingsLicensesIndexRoute
}

const MainRouteRouteChildren: MainRouteRouteChildren = {
  MainDevPaletteIndexRoute: MainDevPaletteIndexRoute,
  MainLogIndexRoute: MainLogIndexRoute,
  MainProjectsIndexRoute: MainProjectsIndexRoute,
  MainSettingsIndexRoute: MainSettingsIndexRoute,
  MainPackagesPackagesIndexRoute: MainPackagesPackagesIndexRoute,
  MainPackagesRepositoriesIndexRoute: MainPackagesRepositoriesIndexRoute,
  MainPackagesUserPackagesIndexRoute: MainPackagesUserPackagesIndexRoute,
  MainProjectsManageIndexRoute: MainProjectsManageIndexRoute,
  MainSettingsLicensesIndexRoute: MainSettingsLicensesIndexRoute,
}

const MainRouteRouteWithChildren = MainRouteRoute._addFileChildren(
  MainRouteRouteChildren,
)

interface SetupRouteRouteChildren {
  SetupSetupAppearanceIndexRoute: typeof SetupSetupAppearanceIndexRoute
  SetupSetupBackupsIndexRoute: typeof SetupSetupBackupsIndexRoute
  SetupSetupFinishIndexRoute: typeof SetupSetupFinishIndexRoute
  SetupSetupProjectPathIndexRoute: typeof SetupSetupProjectPathIndexRoute
  SetupSetupSystemSettingIndexRoute: typeof SetupSetupSystemSettingIndexRoute
  SetupSetupUnityHubIndexRoute: typeof SetupSetupUnityHubIndexRoute
}

const SetupRouteRouteChildren: SetupRouteRouteChildren = {
  SetupSetupAppearanceIndexRoute: SetupSetupAppearanceIndexRoute,
  SetupSetupBackupsIndexRoute: SetupSetupBackupsIndexRoute,
  SetupSetupFinishIndexRoute: SetupSetupFinishIndexRoute,
  SetupSetupProjectPathIndexRoute: SetupSetupProjectPathIndexRoute,
  SetupSetupSystemSettingIndexRoute: SetupSetupSystemSettingIndexRoute,
  SetupSetupUnityHubIndexRoute: SetupSetupUnityHubIndexRoute,
}

const SetupRouteRouteWithChildren = SetupRouteRoute._addFileChildren(
  SetupRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof RouteRoute
  '': typeof SetupRouteRouteWithChildren
  '/dev-palette': typeof MainDevPaletteIndexRoute
  '/log': typeof MainLogIndexRoute
  '/projects': typeof MainProjectsIndexRoute
  '/settings': typeof MainSettingsIndexRoute
  '/packages/packages': typeof MainPackagesPackagesIndexRoute
  '/packages/repositories': typeof MainPackagesRepositoriesIndexRoute
  '/packages/user-packages': typeof MainPackagesUserPackagesIndexRoute
  '/projects/manage': typeof MainProjectsManageIndexRoute
  '/settings/licenses': typeof MainSettingsLicensesIndexRoute
  '/setup/appearance': typeof SetupSetupAppearanceIndexRoute
  '/setup/backups': typeof SetupSetupBackupsIndexRoute
  '/setup/finish': typeof SetupSetupFinishIndexRoute
  '/setup/project-path': typeof SetupSetupProjectPathIndexRoute
  '/setup/system-setting': typeof SetupSetupSystemSettingIndexRoute
  '/setup/unity-hub': typeof SetupSetupUnityHubIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof RouteRoute
  '': typeof SetupRouteRouteWithChildren
  '/dev-palette': typeof MainDevPaletteIndexRoute
  '/log': typeof MainLogIndexRoute
  '/projects': typeof MainProjectsIndexRoute
  '/settings': typeof MainSettingsIndexRoute
  '/packages/packages': typeof MainPackagesPackagesIndexRoute
  '/packages/repositories': typeof MainPackagesRepositoriesIndexRoute
  '/packages/user-packages': typeof MainPackagesUserPackagesIndexRoute
  '/projects/manage': typeof MainProjectsManageIndexRoute
  '/settings/licenses': typeof MainSettingsLicensesIndexRoute
  '/setup/appearance': typeof SetupSetupAppearanceIndexRoute
  '/setup/backups': typeof SetupSetupBackupsIndexRoute
  '/setup/finish': typeof SetupSetupFinishIndexRoute
  '/setup/project-path': typeof SetupSetupProjectPathIndexRoute
  '/setup/system-setting': typeof SetupSetupSystemSettingIndexRoute
  '/setup/unity-hub': typeof SetupSetupUnityHubIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof RouteRoute
  '/_main': typeof MainRouteRouteWithChildren
  '/_setup': typeof SetupRouteRouteWithChildren
  '/_main/dev-palette/': typeof MainDevPaletteIndexRoute
  '/_main/log/': typeof MainLogIndexRoute
  '/_main/projects/': typeof MainProjectsIndexRoute
  '/_main/settings/': typeof MainSettingsIndexRoute
  '/_main/packages/packages/': typeof MainPackagesPackagesIndexRoute
  '/_main/packages/repositories/': typeof MainPackagesRepositoriesIndexRoute
  '/_main/packages/user-packages/': typeof MainPackagesUserPackagesIndexRoute
  '/_main/projects/manage/': typeof MainProjectsManageIndexRoute
  '/_main/settings/licenses/': typeof MainSettingsLicensesIndexRoute
  '/_setup/setup/appearance/': typeof SetupSetupAppearanceIndexRoute
  '/_setup/setup/backups/': typeof SetupSetupBackupsIndexRoute
  '/_setup/setup/finish/': typeof SetupSetupFinishIndexRoute
  '/_setup/setup/project-path/': typeof SetupSetupProjectPathIndexRoute
  '/_setup/setup/system-setting/': typeof SetupSetupSystemSettingIndexRoute
  '/_setup/setup/unity-hub/': typeof SetupSetupUnityHubIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dev-palette'
    | '/log'
    | '/projects'
    | '/settings'
    | '/packages/packages'
    | '/packages/repositories'
    | '/packages/user-packages'
    | '/projects/manage'
    | '/settings/licenses'
    | '/setup/appearance'
    | '/setup/backups'
    | '/setup/finish'
    | '/setup/project-path'
    | '/setup/system-setting'
    | '/setup/unity-hub'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/dev-palette'
    | '/log'
    | '/projects'
    | '/settings'
    | '/packages/packages'
    | '/packages/repositories'
    | '/packages/user-packages'
    | '/projects/manage'
    | '/settings/licenses'
    | '/setup/appearance'
    | '/setup/backups'
    | '/setup/finish'
    | '/setup/project-path'
    | '/setup/system-setting'
    | '/setup/unity-hub'
  id:
    | '__root__'
    | '/'
    | '/_main'
    | '/_setup'
    | '/_main/dev-palette/'
    | '/_main/log/'
    | '/_main/projects/'
    | '/_main/settings/'
    | '/_main/packages/packages/'
    | '/_main/packages/repositories/'
    | '/_main/packages/user-packages/'
    | '/_main/projects/manage/'
    | '/_main/settings/licenses/'
    | '/_setup/setup/appearance/'
    | '/_setup/setup/backups/'
    | '/_setup/setup/finish/'
    | '/_setup/setup/project-path/'
    | '/_setup/setup/system-setting/'
    | '/_setup/setup/unity-hub/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  RouteRoute: typeof RouteRoute
  MainRouteRoute: typeof MainRouteRouteWithChildren
  SetupRouteRoute: typeof SetupRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  RouteRoute: RouteRoute,
  MainRouteRoute: MainRouteRouteWithChildren,
  SetupRouteRoute: SetupRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_main",
        "/_setup"
      ]
    },
    "/": {
      "filePath": "route.tsx"
    },
    "/_main": {
      "filePath": "_main/route.tsx",
      "children": [
        "/_main/dev-palette/",
        "/_main/log/",
        "/_main/projects/",
        "/_main/settings/",
        "/_main/packages/packages/",
        "/_main/packages/repositories/",
        "/_main/packages/user-packages/",
        "/_main/projects/manage/",
        "/_main/settings/licenses/"
      ]
    },
    "/_setup": {
      "filePath": "_setup/route.tsx",
      "children": [
        "/_setup/setup/appearance/",
        "/_setup/setup/backups/",
        "/_setup/setup/finish/",
        "/_setup/setup/project-path/",
        "/_setup/setup/system-setting/",
        "/_setup/setup/unity-hub/"
      ]
    },
    "/_main/dev-palette/": {
      "filePath": "_main/dev-palette/index.tsx",
      "parent": "/_main"
    },
    "/_main/log/": {
      "filePath": "_main/log/index.tsx",
      "parent": "/_main"
    },
    "/_main/projects/": {
      "filePath": "_main/projects/index.tsx",
      "parent": "/_main"
    },
    "/_main/settings/": {
      "filePath": "_main/settings/index.tsx",
      "parent": "/_main"
    },
    "/_main/packages/packages/": {
      "filePath": "_main/packages/packages/index.tsx",
      "parent": "/_main"
    },
    "/_main/packages/repositories/": {
      "filePath": "_main/packages/repositories/index.tsx",
      "parent": "/_main"
    },
    "/_main/packages/user-packages/": {
      "filePath": "_main/packages/user-packages/index.tsx",
      "parent": "/_main"
    },
    "/_main/projects/manage/": {
      "filePath": "_main/projects/manage/index.tsx",
      "parent": "/_main"
    },
    "/_main/settings/licenses/": {
      "filePath": "_main/settings/licenses/index.tsx",
      "parent": "/_main"
    },
    "/_setup/setup/appearance/": {
      "filePath": "_setup/setup/appearance/index.tsx",
      "parent": "/_setup"
    },
    "/_setup/setup/backups/": {
      "filePath": "_setup/setup/backups/index.tsx",
      "parent": "/_setup"
    },
    "/_setup/setup/finish/": {
      "filePath": "_setup/setup/finish/index.tsx",
      "parent": "/_setup"
    },
    "/_setup/setup/project-path/": {
      "filePath": "_setup/setup/project-path/index.tsx",
      "parent": "/_setup"
    },
    "/_setup/setup/system-setting/": {
      "filePath": "_setup/setup/system-setting/index.tsx",
      "parent": "/_setup"
    },
    "/_setup/setup/unity-hub/": {
      "filePath": "_setup/setup/unity-hub/index.tsx",
      "parent": "/_setup"
    }
  }
}
ROUTE_MANIFEST_END */
