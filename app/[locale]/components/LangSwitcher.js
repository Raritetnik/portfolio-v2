import Link from "next/link";

export default function LangSwitcher() {
    return(
        <div>
            <Link href="/en" locale="en">
               <b className="text-2xl md:text-3xl">🇺🇸</b>
            </Link>{" "}
            |{" "}
            <Link href="/fr" locale="fr">
                <b className="text-2xl md:text-3xl">🇫🇷</b>
            </Link>
        </div>
    );
}