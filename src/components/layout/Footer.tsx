import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 pt-6 text-center text-sm text-slate-500 sm:px-8">
      © {new Date().getFullYear()} {profile.name}.Founder of NeutrinoBye
    </footer>
  );
}
