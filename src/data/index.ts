// ============================
// Static data for the app
// Replace with Supabase queries when DB is connected
// ============================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  slug: string;
  date: string;
  readTime: number;
  emoji: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  emoji: string;
}

export interface TechItem {
  name: string;
  icon: string;
  description: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why do cats sleep so much?",
    excerpt:
      "Ever wondered why your furry friend spends most of the day sleeping? Let's explore the fascinating world of cat sleep patterns and what they tell us.",
    content: `Cats are fascinating creatures when it comes to sleep. On average, cats sleep between 12-16 hours a day, with some sleeping up to 20 hours! This is deeply rooted in their evolutionary heritage as hunters.

As predators, cats in the wild needed to conserve energy for intense bursts of activity — stalking, chasing, and catching prey. Even our domestic cats carry this instinct. They sleep in light, REM-rich cycles that allow them to spring into action instantly.

Kittens and senior cats tend to sleep even more. Young kittens need sleep for growth and development, while older cats sleep more as their metabolism slows. Temperature also plays a role — cats sleep more in cold weather to conserve body heat.

Interestingly, cats are "crepuscular" animals, meaning they're most active at dawn and dusk. This is why your cat might zoom around at 3am! Their sleep schedule is simply different from ours.

If you notice your cat sleeping significantly more or less than usual, it could indicate a health issue. Always consult your vet if you notice sudden changes in your cat's sleep habits.`,
    category: "Cat Life",
    image: "/blog-cat1.jpg",
    slug: "why-cats-sleep-so-much",
    date: "October 2, 2026",
    readTime: 4,
    emoji: "😴",
  },
  {
    id: 2,
    title: "Creating the perfect cat adventure",
    excerpt:
      "Cats are naturally curious explorers. Here are some creative ways to enrich their environment and satisfy their adventurous spirit.",
    content: `Cats are natural explorers with an insatiable curiosity about their world. Even indoor cats can experience the thrill of adventure with a few simple enrichment strategies.

**Vertical Space is Key**
Cats love to climb and survey their territory from above. Cat trees, wall-mounted shelves, and window perches give them the vertical dimension they crave. The higher they can go, the safer they feel.

**Window Entertainment**
A window with a view is like cat TV. Set up a comfortable perch near a window where birds or squirrels visit. You can even install a bird feeder outside to create a live nature channel for your cat.

**Interactive Puzzle Feeders**
Instead of a regular food bowl, use puzzle feeders that make your cat "hunt" for their food. This stimulates their natural foraging instincts and keeps their mind sharp.

**Rotation of Toys**
Don't leave all toys out at once. Rotate them to keep things novel and exciting. Even an old toy can seem new and exciting after being "hidden" for a week.

**Safe Outdoor Experiences**
Consider a "catio" (enclosed outdoor enclosure) or harness training for supervised outdoor adventures. Fresh air and new smells are incredibly enriching for cats.

The key is variety and rotation — cats need mental stimulation just as much as physical activity.`,
    category: "Adventure",
    image: "/gallery-cat2.jpg",
    slug: "creating-perfect-cat-adventure",
    date: "September 28, 2026",
    readTime: 5,
    emoji: "🌿",
  },
  {
    id: 3,
    title: "7 signs your cat owns the house",
    excerpt:
      "Think you are the owner? Your cat might have a completely different opinion about that. Here are the telltale signs your feline is running the show.",
    content: `Let's be honest — most cat owners don't really own their cats. It's the other way around. Here are 7 unmistakable signs that your cat is actually the boss of your household.

**1. The Best Spots Are Theirs**
Your cat has claimed the prime real estate: the sunniest window, the softest couch cushion, the exact center of your bed. And you work around them.

**2. Meal Times Are Their Choice**
Your cat doesn't eat when you serve food. They eat when they feel like it — and they'll let you know (loudly) when that is, regardless of what time it is.

**3. Your Lap is Reserved**
They choose when to sit on your lap. You can invite them 20 times and be ignored. But the moment you're on an important video call or trying to work? Suddenly your lap is irresistible.

**4. The Furniture is Their Scratching Post**
Despite having three perfectly good scratching posts, they prefer your couch. Because it's yours.

**5. Closed Doors Are Forbidden**
No door shall remain closed in this house. If you dare to close the bathroom door, expect immediate scratching, crying, and pawing until you comply.

**6. You Apologize to Them**
When you accidentally step on their tail or disturb their sleep, you immediately say sorry and try to make it up to them with treats.

**7. Their Schedule is Your Schedule**
Early morning wake-up calls, midnight zoomies, 4am feedings — your schedule now revolves entirely around them. And honestly? You wouldn't have it any other way.`,
    category: "Funny Cats",
    image: "/gallery-cat3.jpg",
    slug: "7-signs-cat-owns-the-house",
    date: "September 20, 2026",
    readTime: 3,
    emoji: "👑",
  },
  {
    id: 4,
    title: "Understanding cat body language",
    excerpt:
      "Cats communicate in subtle but clear ways. Learn to read their body language and strengthen your bond with your feline companion.",
    content: `Cats are actually quite communicative — you just need to know their language. Here's a guide to understanding what your cat is telling you.

**The Slow Blink — I Love You**
When your cat looks at you and slowly closes their eyes, that's a feline "I love you." Try slow blinking back to tell them the same. This is one of the most heartwarming cat behaviors.

**Tail Positions**
- Tail up: Happy and confident
- Tail puffed: Scared or threatened
- Tail low or tucked: Anxious or submissive
- Tail wrapped around you: Affection and friendship

**Ear Positions**
- Forward: Curious and engaged
- Sideways (airplane ears): Irritated or overstimulated
- Flat back: Frightened or aggressive

**The Belly Trap**
When a cat shows you their belly, they're showing trust. But beware — this isn't always an invitation to pet! Many cats will immediately grab your hand if you try.

**Kneading**
When cats "make biscuits" (kneading), it's a sign of contentment. They learned this as kittens when nursing. It means they feel safe and comfortable.

**Chirping at Birds**
That strange chattering sound cats make when watching birds? It's thought to be either excitement or a frustrated hunting instinct — a bit of both, probably.

Understanding these signals will help you communicate better and avoid overstimulation.`,
    category: "Cat Psychology",
    image: "/about-cat.jpg",
    slug: "understanding-cat-body-language",
    date: "September 15, 2026",
    readTime: 6,
    emoji: "🐱",
  },
  {
    id: 5,
    title: "The best cat breeds for beginners",
    excerpt:
      "Thinking of adopting your first cat? Some breeds are especially wonderful for first-time cat owners. Here's our guide to the most beginner-friendly cats.",
    content: `Choosing your first cat is an exciting decision. Different breeds have different temperaments, care needs, and personalities. Here are some of the best options for first-time cat parents.

**Ragdoll**
True to their name, Ragdolls go limp when picked up. They're incredibly gentle, affectionate, and calm. They love being held and are great with children. They're often called "puppy cats" because of their dog-like loyalty.

**Maine Coon**
One of the largest cat breeds, Maine Coons are gentle giants. They're playful but not demanding, curious but not destructive. They adapt well to different living situations and are known for their dog-like behavior.

**British Shorthair**
These cats are calm, easygoing, and not overly needy. They enjoy affection but are also perfectly happy to entertain themselves. Perfect for busy owners.

**Burmese**
Burmese cats are social and affectionate without being overwhelming. They love people and adjust well to apartment living. They're playful and maintain a kitten-like energy well into adulthood.

**Domestic Shorthair (Mixed Breed)**
Don't overlook mixed-breed cats! They're often healthier due to genetic diversity, and shelter cats are in desperate need of loving homes. Their personalities are wonderfully unique.

Whatever breed you choose, remember: every cat is an individual. The most important thing is to spend time with a cat before adopting to make sure your personalities match.`,
    category: "Cat Breeds",
    image: "/hero-cat.jpg",
    slug: "best-cat-breeds-for-beginners",
    date: "September 8, 2026",
    readTime: 7,
    emoji: "🐾",
  },
  {
    id: 6,
    title: "How to take amazing photos of your cat",
    excerpt:
      "Your cat is adorable — but capturing that cuteness on camera can be challenging. Here are professional tips for photographing your feline friend.",
    content: `Cats make wonderful photography subjects — when they cooperate. Here's how to capture stunning photos of your feline friend.

**The Golden Rule: Let Them Lead**
Never force a cat into a pose. Instead, set up your space and let the cat move naturally. Have your camera ready and be patient. The best shots happen organically.

**Get Down to Their Level**
Rather than photographing from above, get on their level. Eye-level shots create a more intimate, engaging perspective that makes viewers feel connected to the subject.

**Light is Everything**
Natural light is your best friend. Position your cat near a window for beautiful, soft light. Avoid flash — it can frighten cats and creates red-eye.

**Focus on the Eyes**
Sharp, bright eyes are what make a cat photo truly magical. Make sure the eyes are always in perfect focus, even if other parts of the image are slightly soft.

**Use Burst Mode**
Cats move fast. Use your camera's burst mode or set it to continuous shooting. You'll capture expressions and poses you'd miss with single shots.

**Treats and Toys**
Use treats or a small toy to attract the cat's attention and create engaging expressions. Dangle a feather toy just above the lens for a cat looking directly at the camera.

**Edit Thoughtfully**
A little warmth adjustment and slight contrast enhancement can make your cat photos look truly professional. Don't over-edit — preserve the natural beauty.`,
    category: "Photography",
    image: "/gallery-cat1.jpg",
    slug: "how-to-photograph-your-cat",
    date: "September 1, 2026",
    readTime: 5,
    emoji: "📸",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Sleepy Morning",
    image: "/gallery-cat1.jpg",
    emoji: "☀️",
  },
  {
    id: 2,
    title: "Little Explorer",
    image: "/gallery-cat2.jpg",
    emoji: "🌿",
  },
  {
    id: 3,
    title: "King of the House",
    image: "/gallery-cat3.jpg",
    emoji: "👑",
  },
  {
    id: 4,
    title: "Cozy Window Day",
    image: "/about-cat.jpg",
    emoji: "🪟",
  },
  {
    id: 5,
    title: "The Golden Hour",
    image: "/hero-cat.jpg",
    emoji: "✨",
  },
  {
    id: 6,
    title: "Sweet Dreams",
    image: "/blog-cat1.jpg",
    emoji: "💤",
  },
];

export const techStack: TechItem[] = [
  { name: "React.js", icon: "⚛️", description: "UI Library", category: "Frontend" },
  { name: "Next.js", icon: "▲", description: "Full-Stack Framework", category: "Framework" },
  { name: "TypeScript", icon: "🔷", description: "Type Safety", category: "Language" },
  { name: "JavaScript", icon: "🟡", description: "Core Language", category: "Language" },
  { name: "Nest.js", icon: "🐦", description: "Backend Framework", category: "Backend" },
  { name: "Supabase", icon: "⚡", description: "Database & Auth", category: "Database" },
  { name: "CSS3", icon: "🎨", description: "Styling", category: "Frontend" },
  { name: "HTML5", icon: "🌐", description: "Markup", category: "Frontend" },
  { name: "Angular", icon: "🔴", description: "SPA Framework", category: "Frontend" },
  { name: "Node.js", icon: "🟢", description: "Runtime", category: "Backend" },
  { name: "Framer Motion", icon: "🎭", description: "Animations", category: "Library" },
  { name: "Vercel", icon: "🚀", description: "Deployment", category: "DevOps" },
];
