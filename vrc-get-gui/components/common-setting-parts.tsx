import i18next, {languages, tc} from "@/lib/i18n";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {
	environmentLanguage,
	environmentSetLanguage,
	environmentSetTheme,
	environmentTheme,
	utilOpen
} from "@/lib/bindings";
import {ToastContent} from "react-toastify";
import {useFilePickerFunction} from "@/lib/use-file-picker-dialog";
import {toastError, toastSuccess, toastThrownError} from "@/lib/toast";
import {assertNever} from "@/lib/assert-never";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export function LanguageSelector() {
	const {data: lang, refetch: refetchLang} = useQuery({
		queryKey: ["environmentLanguage"],
		queryFn: environmentLanguage
	})

	const changeLanguage = async (value: string) => {
		await Promise.all([
			i18next.changeLanguage(value),
			environmentSetLanguage(value),
			refetchLang(),
		])
	};

	return (
		<label className="flex items-center">
			<span className="text-lg">
				{tc("settings:language")}{": "}
			</span>
			<Select value={lang} onValueChange={changeLanguage}>
				<SelectTrigger>
					<SelectValue/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{
							languages.map((lang) => (
								<SelectItem key={lang} value={lang}>{tc("settings:langName", {lng: lang})}</SelectItem>
							))
						}
					</SelectGroup>
				</SelectContent>
			</Select>
		</label>
	)
}

export function ThemeSelector() {
	const [theme, setTheme] = React.useState<string | null>(null);

	React.useEffect(() => {
		(async () => {
			const theme = await environmentTheme();
			setTheme(theme);
		})();
	}, [])

	const changeTheme = async (theme: string) => {
		await environmentSetTheme(theme);
		setTheme(theme);
		document.documentElement.setAttribute("class", theme);
	};

	return (
		<label className={"flex items-center"}>
			<span className={"text-lg"}>{tc("settings:theme")}{": "}</span>
			<Select value={theme ?? undefined} onValueChange={changeTheme}>
				<SelectTrigger>
					<SelectValue/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value={"system"}>{tc("settings:theme:system")}</SelectItem>
						<SelectItem value={"light"}>{tc("settings:theme:light")}</SelectItem>
						<SelectItem value={"dark"}>{tc("settings:theme:dark")}</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</label>
	)
}

export function FilePathRow(
	{
		path,
		notFoundMessage,
		pick,
		refetch,
		successMessage,
		withoutSelect = false,
	}: {
		path: string;
		notFoundMessage?: string;
		pick: () => Promise<{ type: "NoFolderSelected" | "InvalidSelection" | "Successful" }>;
		refetch: () => void;
		successMessage: ToastContent;
		withoutSelect?: boolean;
	}) {
	const [pickPath, dialog] = useFilePickerFunction(pick);

	const selectFolder = async () => {
		try {
			const result = await pickPath();
			switch (result.type) {
				case "NoFolderSelected":
					// no-op
					break;
				case "InvalidSelection":
					toastError(tc("general:toast:invalid directory"));
					break;
				case "Successful":
					toastSuccess(successMessage);
					refetch()
					break;
				default:
					assertNever(result.type);
			}
		} catch (e) {
			console.error(e);
			toastThrownError(e)
		}
	};

	const openFolder = async () => {
		try {
			await utilOpen(path, "CreateFolderIfNotExists")
		} catch (e) {
			console.error(e);
			toastThrownError(e)
		}
	};

	return (
		<div className={"flex gap-1 items-center"}>
			{
				!path && notFoundMessage
					? <Input className="flex-auto text-destructive" value={notFoundMessage} disabled/>
					: <Input className="flex-auto" value={path} disabled/>
			}
			<Button className={"flex-none px-4"} onClick={selectFolder}>
				{tc("general:button:select")}
			</Button>
			{withoutSelect || <Button className={"flex-none px-4"} onClick={openFolder}>
				{tc("settings:button:open location")}
			</Button>}
			{dialog}
		</div>
	)
}

export function BackupFormatSelect(
	{
		backupFormat,
		setBackupFormat,
	}: {
		backupFormat: string;
		setBackupFormat: (format: string) => void;
	}
) {
	return (
		<Select value={backupFormat} onValueChange={setBackupFormat}>
			<SelectTrigger>
				<SelectValue/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value={"default"}>{tc("settings:backup:format:default")}</SelectItem>
					<SelectItem value={"zip-store"}>{tc("settings:backup:format:zip-store")}</SelectItem>
					<SelectItem value={"zip-fast"}>{tc("settings:backup:format:zip-fast")}</SelectItem>
					<SelectItem value={"zip-best"}>{tc("settings:backup:format:zip-best")}</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
