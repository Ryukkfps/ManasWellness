import { prisma } from '@/lib/prisma';
import { StatTile } from '@/components/ui/StatTile';
import { Mail, Briefcase, CalendarHeart, BookOpen, Star, ClipboardList } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [
    newEnquiries,
    totalEnquiries,
    activeServices,
    upcomingEvents,
    publishedPosts,
    pendingReviews,
    surveyResponses,
  ] = await Promise.all([
    prisma.enquiry.count({ where: { status: 'NEW' } }),
    prisma.enquiry.count(),
    prisma.service.count({ where: { isActive: true } }),
    prisma.event.count({ where: { isActive: true, startDate: { gte: new Date() } } }),
    prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
    prisma.review.count({ where: { isApproved: false } }),
    prisma.surveyResponse.count(),
  ]);

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-2xl text-ink">Dashboard</h1>
          <p className="text-sm text-ink-muted mt-1">Manaswellness management panel</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <StatTile label="New Enquiries" value={newEnquiries} icon={Mail} href="/admin/enquiries" />
          <StatTile label="Total Enquiries" value={totalEnquiries} icon={Mail} href="/admin/enquiries" />
          <StatTile label="Active Services" value={activeServices} icon={Briefcase} href="/admin/services" />
          <StatTile label="Upcoming Events" value={upcomingEvents} icon={CalendarHeart} href="/admin/events" />
          <StatTile label="Published Posts" value={publishedPosts} icon={BookOpen} href="/admin/blog" />
          <StatTile label="Reviews to Moderate" value={pendingReviews} icon={Star} href="/admin/reviews" />
          <StatTile label="Survey Responses" value={surveyResponses} icon={ClipboardList} href="/admin/surveys" />
        </div>
      </div>
    </div>
  );
}
