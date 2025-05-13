"use client";

import { ScrollableCardTable } from "@/components/ScrollableCardTable";
import { HNavBar, VStack } from "@/components/layout";
import { Checkbox } from "@/components/ui/checkbox";
import type { TauriPackage } from "@/lib/bindings";
import { commands } from "@/lib/bindings";
import { tc } from "@/lib/i18n";
import { usePrevPathName } from "@/lib/prev-page";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
  Suspense,
  useId,
  useMemo,
} from "react";
import { HeadingPageName } from "../-tab-selector";
import { compareVersion, toVersionString } from "@/lib/version";

export const Route = createFileRoute("/_main/packages/packages/")({
  component: Page,
});

function Page() {
  return (
    <Suspense>
      <PageBody />
    </Suspense>
  );
}

function PageBody() {
  const result = useQuery({
    queryKey: ["environmentPackagesInfo"],
    queryFn: commands.environmentPackagesInfo,
    refetchOnWindowFocus: false
  });

  const hiddenPackages = useMemo(
    () => new Set(result.data?.hidden_packages),
    [result],
  );

  const bodyAnimation = usePrevPathName().startsWith("/packages")
    ? "slide-right"
    : "";

  return (
    <VStack>
      <HNavBar
        className={"shrink-0"}
        leading={<HeadingPageName pageType={"/packages/packages"} />}
      />
      <main
        className={`shrink overflow-hidden flex w-full h-full ${bodyAnimation}`}
      >
        <ScrollableCardTable className={"h-full w-full"}>
          <PackageTableBody
            packages={result.data?.packages || []}
            hiddenPackages={hiddenPackages}
            refetch={() => result.refetch()}
          />
        </ScrollableCardTable>
      </main>
    </VStack>
  );
}

function PackageTableBody({
  packages,
  hiddenPackages,
  refetch,
}: {
  packages: TauriPackage[];
  hiddenPackages: Set<string>;
  refetch: () => void
}) {
  const TABLE_HEAD = [
    "", // checkbox
    "general:name",
    "general:source",
    "all packages:latest"
  ];


  const legacyPackages = Array.from(new Set(packages.flatMap((value) => value.legacy_packages)));
  const newPackages = packages
    .sort((a, b) => -compareVersion(a.version, b.version))
    .filter((value, index, self) => 
      index === self.findIndex((t) => t.name === value.name &&
      !legacyPackages.includes(value.name) &&
      !value.is_yanked
    ))
    .map((value) => {
      const source = value.source !== "LocalUser" ? value.source.Remote : { id: "zzz.local", display_name: "Local User Package"};
      return { name: value.name, display_name: value.display_name, source: source, version: value.version }
    })
    .sort((a, b) => {
      return   (a.source.id > b.source.id)
        ?  1 : (a.source.id < b.source.id)
        ? -1 : (a.name > b.name)
        ?  1 : (a.name < b.name)
        ? -1 : 0;
    });

  return (
    <>
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th
              // biome-ignore lint/suspicious/noArrayIndexKey: static array
              key={index}
              className={
                "sticky top-0 z-10 border-b border-primary bg-secondary text-secondary-foreground p-2.5"
              }
            >
              <small className="font-normal leading-none">{tc(head)}</small>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {newPackages
          .map((item) => (
            <PackageRow
              key={item.name}
              hiddenPackages={hiddenPackages}
              packageName={item.name}
              displayName={item.display_name || item.name}
              sourceName={item.source.display_name}
              version={toVersionString(item.version)}
              refetch={refetch}
            />
          ))}
      </tbody>
    </>
  );
}

function PackageRow({
  hiddenPackages,
  packageName,
  displayName,
  sourceName,
  version,
  className,
  refetch,
}: {
  hiddenPackages: Set<string>;
  packageName: string;
  displayName: string;
  sourceName: string;
  version: string;
  className?: string;
  refetch: () => void
}) {
  const cellClass = "p-2.5";
  const id = useId();

  const selected = !hiddenPackages.has(packageName);
  const onChange = () => {
    if (selected) {
      commands.environmentHidePackage(packageName).then(refetch);
    } else {
      commands.environmentShowPackage(packageName).then(refetch);
    }
  };

  return (
    <tr className={cn("even:bg-secondary/30", className)}>
      <td className={cellClass}>
        <Checkbox id={id} checked={selected} onCheckedChange={onChange} />
      </td>
      <td className={cellClass}>
        <label htmlFor={id}>
          <p className="font-normal">{displayName}</p>
        </label>
      </td>
      <td className={cellClass}>
        <p className="font-normal">{sourceName}</p>
      </td>
      <td className={cellClass}>
        <p className="font-normal">{version}</p>
      </td>
    </tr>
  );
}
