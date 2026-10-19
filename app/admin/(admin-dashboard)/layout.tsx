import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import HeaderSignOutButton from '@/components/admin/HeaderSignOutButton';
import AdminSessionProvider from '@/components/admin/AdminSessionProvider';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <AdminSessionProvider>
      <div className="flex flex-col md:flex-row min-h-screen bg-cream">
        <AdminSidebar />

        <main className="flex-grow flex flex-col min-w-0">
          <header className="bg-white border-b border-line px-6 md:px-8 py-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-ink">Admin Panel</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-ink-muted hidden sm:inline">Welcome, {session.user?.name || 'Admin'}</span>
              <HeaderSignOutButton />
            </div>
          </header>
          <div className="flex-grow">
            {children}
          </div>
        </main>
      </div>
    </AdminSessionProvider>
  );
}
