import Link from "next/link";
import { LogOut, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/app/admin/actions";

export function AdminHeader() {
  return (
    <header className="bg-dark text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <FileText className="h-5 w-5 text-dourado" />
          <h1 className="font-bold text-lg">Painel Admin</h1>
        </Link>
        <form action={logoutAction}>
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </form>
      </div>
    </header>
  );
}
