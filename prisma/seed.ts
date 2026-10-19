import "dotenv/config";
import bcrypt from "bcryptjs";
// Schema generates to a custom output path, not the default @prisma/client.
import { PrismaClient } from "../lib/prisma-client";

const prisma = new PrismaClient({
  log: ["error"],
});

async function main() {
  try {
    await prisma.user.deleteMany({});
    await prisma.content.deleteMany({});
    await prisma.carouselSlide.deleteMany({});
    await prisma.service.deleteMany({});
    await prisma.contactInfo.deleteMany({});
    await prisma.review.deleteMany({});
    await prisma.aboutSection.deleteMany({});
    await prisma.legalPage.deleteMany({});
    await prisma.therapistProfile.deleteMany({});
    await prisma.siteSettings.deleteMany({});
    await prisma.galleryImage.deleteMany({});
    await prisma.event.deleteMany({});
    await prisma.surveyAnswer.deleteMany({});
    await prisma.surveyResponse.deleteMany({});
    await prisma.surveyQuestion.deleteMany({});
    await prisma.survey.deleteMany({});
    await prisma.blogPost.deleteMany({});
    await prisma.enquiry.deleteMany({});
    await prisma.appointment.deleteMany({});
  } catch (e) {
    console.log("Cleanup failed (likely because collections don't exist yet), continuing...");
  }

  // --- Admin user ---
  if (!process.env.SEED_ADMIN_PASSWORD) {
    throw new Error(
      "SEED_ADMIN_PASSWORD is required (see .env.example) — no fallback password, to avoid seeding a publicly-known credential."
    );
  }
  const adminEmail = process.env.SEED_ADMIN_EMAIL || "admin@manaswellness.in";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.create({
    data: {
      name: "Admin",
      email: adminEmail,
      password: passwordHash,
      role: "ADMIN",
    },
  });
  console.log(`Seeded admin user ${adminEmail} — change this password after first login.`);

  // --- Therapist profile (singleton, placeholder) ---
  await prisma.therapistProfile.create({
    data: {
      fullName: "Dr. Ananya Rao",
      title: "Counselling Psychologist (placeholder — client to confirm)",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      shortBio:
        "Dr. Ananya Rao is a counselling psychologist with experience supporting individuals and couples through anxiety, stress, relationship difficulties, and life transitions. Placeholder bio — to be replaced with the client's actual content.",
      qualifications: ["M.Phil Clinical Psychology (placeholder)", "RCI Registered (placeholder)"],
      specialisations: ["Anxiety & Stress", "Relationships & Couples", "Grief & Life Transitions", "Self-Esteem"],
      languages: ["English", "Hindi"],
      approach:
        "<p>A warm, client-centred approach drawing on evidence-based practice, tailored to each person's pace and needs. Placeholder copy — to be replaced by the client.</p>",
      yearsExperience: 8,
      registrationNo: null,
    },
  });

  // --- Site settings (singleton) ---
  await prisma.siteSettings.create({
    data: {
      siteName: "Manaswellness",
      tagline: "A gentle space to feel heard",
      metaDescription:
        "Manaswellness offers individual and couples counselling, group wellness events, and mental health resources. Placeholder description — to be finalised with the client.",
      crisisNotice:
        "If you are in crisis or need immediate support, please reach out to Tele-MANAS (14416) or KIRAN (1800-599-0019). Placeholder helplines — client must confirm before launch.",
      cookieConsentEnabled: false,
    },
  });

  // --- Contact info (singleton) ---
  await prisma.contactInfo.create({
    data: {
      address: "Placeholder Address\nKoramangala\nBengaluru, Karnataka 560034",
      phone: "+91 98765 43210",
      email: "hello@manaswellness.in",
      workingHours: "Mon-Fri: 10:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM",
      mapEmbedUrl: null,
    },
  });

  // --- Hero/banner content sections ---
  await prisma.content.create({
    data: {
      title: "A gentle space to feel heard",
      subtitle: "Individual & Couples Counselling",
      description:
        "Manaswellness offers a calm, confidential space to work through anxiety, stress, relationships, and life's transitions — at your own pace. Placeholder copy.",
      backgroundImage:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1600&q=80",
      ctaText: "Explore Services",
      ctaLink: "/services",
      textColor: "white",
      overlayOpacity: 0.45,
      order: 1,
      isActive: true,
    },
  });

  await prisma.content.create({
    data: {
      title: "You don't have to carry it alone",
      subtitle: "Support, at your pace",
      description:
        "Whether it's your first time seeking support or you're returning to therapy, we meet you where you are. Placeholder copy.",
      backgroundImage:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&q=80",
      ctaText: "Get in Touch",
      ctaLink: "/contact",
      textColor: "white",
      overlayOpacity: 0.4,
      order: 2,
      isActive: true,
    },
  });

  // --- Carousel (optional hero alternative) ---
  await prisma.carouselSlide.create({
    data: {
      title: "A space to breathe",
      subtitle: "WELCOME TO MANASWELLNESS",
      description: "Calm, confidential, client-centred mental wellness support. Placeholder copy.",
      image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1600&q=80",
      ctaText: "Learn More",
      ctaLink: "/about",
      order: 1,
      isActive: true,
    },
  });

  // --- Services ---
  const services = [
    {
      title: "Individual Therapy",
      slug: "individual-therapy",
      shortDescription: "One-on-one sessions for anxiety, stress, and personal growth.",
      description:
        "<p>Personalised sessions to work through anxiety, stress, low mood, and personal growth, in a confidential and non-judgemental space.</p>",
      durationMinutes: 50,
      priceLabel: "₹1,800 / 50 min",
      modes: ["IN_PERSON", "ONLINE"],
      icon: "HeartHandshake",
      order: 1,
      isActive: true,
    },
    {
      title: "Anxiety & Stress Support",
      slug: "anxiety-stress-support",
      shortDescription: "Practical, evidence-based support for anxiety and chronic stress.",
      description:
        "<p>Structured support drawing on evidence-based techniques to help manage anxiety and chronic stress.</p>",
      durationMinutes: 50,
      priceLabel: "₹1,800 / 50 min",
      modes: ["IN_PERSON", "ONLINE", "PHONE"],
      icon: "Leaf",
      order: 2,
      isActive: true,
    },
    {
      title: "Relationship & Couples Counselling",
      slug: "relationship-couples-counselling",
      shortDescription: "Support for couples navigating communication and connection.",
      description:
        "<p>A supportive space for couples to improve communication, rebuild trust, and reconnect.</p>",
      durationMinutes: 75,
      priceLabel: "₹2,800 / 75 min",
      modes: ["IN_PERSON", "ONLINE"],
      icon: "Users",
      order: 3,
      isActive: true,
    },
    {
      title: "Grief & Life Transitions",
      slug: "grief-life-transitions",
      shortDescription: "Support through loss, change, and major life transitions.",
      description:
        "<p>Compassionate support for processing grief and navigating significant life transitions.</p>",
      durationMinutes: 50,
      priceLabel: "₹1,800 / 50 min",
      modes: ["IN_PERSON", "ONLINE"],
      icon: "Sunrise",
      order: 4,
      isActive: true,
    },
    {
      title: "Teen & Young Adult Support",
      slug: "teen-young-adult-support",
      shortDescription: "Tailored support for teenagers and young adults.",
      description:
        "<p>A safe, age-appropriate space for teens and young adults navigating identity, academic pressure, and relationships.</p>",
      durationMinutes: 50,
      priceLabel: "₹1,800 / 50 min",
      modes: ["IN_PERSON", "ONLINE"],
      icon: "Sprout",
      order: 5,
      isActive: true,
    },
    {
      title: "Free 15-Minute Discovery Call",
      slug: "discovery-call",
      shortDescription: "A short, no-obligation call to see if we're a good fit.",
      description:
        "<p>A brief, free call to discuss what you're looking for and answer any questions before booking a full session.</p>",
      durationMinutes: 15,
      priceLabel: "Free",
      modes: ["PHONE", "ONLINE"],
      icon: "MessageCircle",
      order: 6,
      isActive: true,
    },
  ];
  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  // --- About sections ---
  await prisma.aboutSection.create({
    data: {
      title: "Meet Dr. Ananya Rao",
      subtitle: "ABOUT YOUR THERAPIST",
      content:
        "Placeholder biography content. Dr. Ananya Rao has spent over eight years supporting individuals and couples through life's challenges, with a warm and collaborative approach.\n\nThis content will be replaced with the client's actual bio.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&q=80",
      layout: "NORMAL",
      order: 1,
      isActive: true,
    },
  });

  await prisma.aboutSection.create({
    data: {
      title: "Our Approach",
      subtitle: "HOW WE WORK TOGETHER",
      content:
        "Placeholder content describing the therapeutic philosophy: client-centred, evidence-informed, and paced to each person's comfort.",
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1000&q=80",
      layout: "MIRRORED",
      order: 2,
      isActive: true,
    },
  });

  // --- Legal pages ---
  await prisma.legalPage.create({
    data: {
      slug: "privacy-policy",
      title: "Privacy Policy",
      content:
        "<h1>Privacy Policy</h1><p>Placeholder privacy policy. This content references India's Digital Personal Data Protection Act, 2023 and must be reviewed by the client before launch.</p>",
    },
  });
  await prisma.legalPage.create({
    data: {
      slug: "terms-and-conditions",
      title: "Terms and Conditions",
      content: "<h1>Terms and Conditions</h1><p>Placeholder terms and conditions, to be reviewed by the client before launch.</p>",
    },
  });
  await prisma.legalPage.create({
    data: {
      slug: "cookie-policy",
      title: "Cookie Policy",
      content: "<h1>Cookie Policy</h1><p>Placeholder cookie policy, to be reviewed by the client before launch.</p>",
    },
  });

  // --- Reviews / testimonials ---
  const reviews = [
    { author: "P.S.", content: "Placeholder testimonial — felt heard and supported from the first session.", rating: 5, isApproved: true },
    { author: "R.K.", content: "Placeholder testimonial — practical guidance that actually helped.", rating: 5, isApproved: true },
    { author: "A.M.", content: "Placeholder testimonial — a safe, non-judgemental space.", rating: 4, isApproved: true },
    { author: "N.D.", content: "Placeholder testimonial — couples counselling helped us communicate again.", rating: 5, isApproved: true },
    { author: "S.V.", content: "Placeholder testimonial pending approval.", rating: 5, isApproved: false },
  ];
  for (const review of reviews) {
    await prisma.review.create({ data: review });
  }

  // --- Events + gallery ---
  const groupEvent = await prisma.event.create({
    data: {
      title: "Mindfulness & Stress Management Workshop",
      slug: "mindfulness-stress-management-workshop",
      description:
        "<p>A placeholder group workshop covering practical mindfulness techniques for everyday stress. Client to confirm real event details.</p>",
      startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      location: "Placeholder venue, Bengaluru",
      bannerImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80",
      isActive: true,
      order: 1,
    },
  });
  await prisma.galleryImage.createMany({
    data: [
      {
        eventId: groupEvent.id,
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
        caption: "Placeholder highlight photo",
        order: 1,
      },
      {
        eventId: groupEvent.id,
        imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
        caption: "Placeholder highlight photo",
        order: 2,
      },
    ],
  });

  const pastEvent = await prisma.event.create({
    data: {
      title: "Community Wellness Circle",
      slug: "community-wellness-circle",
      description: "<p>A placeholder past group event for testing the past/upcoming split.</p>",
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      location: "Placeholder venue, Bengaluru",
      bannerImage: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&q=80",
      isActive: true,
      order: 2,
    },
  });
  await prisma.galleryImage.create({
    data: {
      eventId: pastEvent.id,
      imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&q=80",
      caption: "Placeholder highlight photo",
      order: 1,
    },
  });

  // --- Survey (placeholder — real questionnaire supplied by client later) ---
  await prisma.survey.create({
    data: {
      title: "Sample Wellbeing Check-In (placeholder)",
      slug: "sample-wellbeing-check-in",
      description:
        "This is a placeholder questionnaire to preview the survey flow. It will be replaced with the client's real psychology questionnaire.",
      isActive: true,
      questions: {
        create: [
          { order: 1, type: "TEXT", label: "What brings you here today?", options: [], required: true },
          {
            order: 2,
            type: "SINGLE_CHOICE",
            label: "How would you describe your stress level this week?",
            options: ["Low", "Moderate", "High", "Very high"],
            required: true,
          },
          {
            order: 3,
            type: "MULTI_CHOICE",
            label: "Which areas feel most affected right now?",
            options: ["Sleep", "Relationships", "Work", "Physical health", "Motivation"],
            required: false,
          },
          {
            order: 4,
            type: "SCALE",
            label: "On a scale of 1-5, how supported do you feel right now?",
            options: ["1", "2", "3", "4", "5"],
            required: true,
          },
        ],
      },
    },
  });

  // --- Blog posts ---
  const blogPosts = [
    {
      title: "Understanding Anxiety: A Gentle Introduction",
      slug: "understanding-anxiety-gentle-introduction",
      excerpt: "Placeholder excerpt introducing anxiety in accessible, non-clinical language.",
      content: "<p>Placeholder blog content. To be replaced with the client's real writing.</p>",
      coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
      tags: ["anxiety", "mental-health-101"],
      authorName: "Dr. Ananya Rao",
      status: "PUBLISHED",
      publishedAt: new Date(),
    },
    {
      title: "Five Small Habits for Better Sleep",
      slug: "five-small-habits-for-better-sleep",
      excerpt: "Placeholder excerpt about sleep hygiene basics.",
      content: "<p>Placeholder blog content. To be replaced with the client's real writing.</p>",
      coverImage: "https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=1200&q=80",
      tags: ["sleep", "self-care"],
      authorName: "Dr. Ananya Rao",
      status: "PUBLISHED",
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
    {
      title: "Draft: Notes on Couples Communication (unpublished)",
      slug: "draft-notes-on-couples-communication",
      excerpt: "Placeholder draft to test the draft/publish workflow.",
      content: "<p>Placeholder draft content, not yet published.</p>",
      coverImage: null,
      tags: ["relationships"],
      authorName: "Dr. Ananya Rao",
      status: "DRAFT",
      publishedAt: null,
    },
  ];
  for (const post of blogPosts) {
    await prisma.blogPost.create({ data: post });
  }

  // --- Enquiries (lead MIS sample data) ---
  const enquiries = [
    { name: "Priya Sharma", email: "priya@example.com", phone: "+91 90000 00001", subject: "Individual therapy enquiry", message: "Placeholder enquiry message.", status: "NEW" },
    { name: "Rahul Verma", email: "rahul@example.com", phone: "+91 90000 00002", subject: "Couples counselling", message: "Placeholder enquiry message.", status: "CONTACTED" },
    { name: "Ananya Iyer", email: "ananya@example.com", subject: "Workshop details", message: "Placeholder enquiry message.", status: "QUALIFIED" },
    { name: "Vikram Nair", email: "vikram@example.com", subject: "General query", message: "Placeholder enquiry message.", status: "CONVERTED" },
    { name: "Test Archived", email: "archived@example.com", subject: "Old enquiry", message: "Placeholder archived enquiry.", status: "ARCHIVED" },
  ];
  for (const enquiry of enquiries) {
    await prisma.enquiry.create({ data: enquiry });
  }

  // --- Appointments (dormant feature — sample rows kept for when it's re-enabled) ---
  await prisma.appointment.create({
    data: {
      name: "Sample Appointment",
      email: "sample@example.com",
      phone: "+91 90000 00003",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      time: "10:00 AM",
      service: "Individual Therapy",
      status: "PENDING",
    },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
