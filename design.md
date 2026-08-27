# Workflow Zero Design System

## 1. Brand Idea

### Core concept

**There’s probably an easier way.**

Workflow Zero should feel like the approachable company that helps small-business owners reduce repetitive administrative work without overwhelming them with technical language.

The brand is not about showing off technology. It is about helping people feel:

1. **Life gets easier**
2. **The company is easy to work with**
3. **They know what they’re doing**
4. **I’ll save time**
5. **I may save money**

### Brand personality

**Casual competence**

Workflow Zero should feel:

- Approachable before impressive
- Competent without showing off
- Casual, but clearly professional
- Modern without feeling startup-ish
- Tech-enabled without feeling overly technical
- Helpful rather than salesy
- Bold visually and simple verbally

A good mental model is:

> White sneakers + clean T-shirt + knows his stuff.

Not:

> Navy suit + corporate consulting deck.

And not:

> Black hoodie + glowing AI brain.

---

## 2. Brand Positioning

Workflow Zero is not an IT MSP and should not visually or verbally resemble one.

The company focuses on:

- AI automation
- Workflow automation
- Process improvement
- Reducing repetitive administrative work
- Helping small businesses use automation without needing technical expertise

### Positioning hierarchy

Avoid leading with AI itself.

Preferred hierarchy:

**Annoying repetitive work → Easier way → Automation → AI where useful**

Avoid:

**AI → Automation → Efficiency → Customer benefit**

The customer benefit should always come first.

---

## 3. Visual Direction

### Overall feel

- Clean
- Bright
- Bold
- Friendly
- Rounded
- Uncomplicated
- Mostly light
- Modern
- Approachable
- Professional without being corporate

### Tech intensity

**5/10**

The brand should clearly feel technology-related, but it should never look futuristic, intimidating, or developer-focused.

### White space

Use a **balanced layout with generous breathing room**.

The site should feel spacious without feeling empty.

---

## 4. Color System

Use flat colors throughout the brand so assets remain easy to reproduce across websites, social media, shirts, hats, embroidery, screen printing, and signage.

### Primary Colors

#### Workflow Blue

```css
#2878F0
```

Use for:

- Primary buttons
- Links
- Important icons
- Highlights
- Social media emphasis
- The blue portion of the logo
- Selected graphic elements

#### Workflow Charcoal

```css
#20252B
```

Use instead of pure black.

Use for:

- Headlines
- Body text
- The dark portion of the logo
- Dark merchandise
- Occasional dark sections

#### Zero White

```css
#FFFFFF
```

Use as the dominant page and design background.

---

### Supporting Neutrals

#### Cloud

```css
#F5F6F8
```

Use for:

- Alternate page sections
- Soft cards
- Social media backgrounds
- Low-emphasis surfaces

#### Slate

```css
#69727D
```

Use for:

- Secondary text
- Captions
- Metadata
- Supporting information

#### Line

```css
#E3E6EA
```

Use for:

- Borders
- Dividers
- Form fields
- Card outlines

#### Blue Mist

```css
#EAF2FE
```

Use as a soft blue-tinted neutral for:

- Callouts
- Diagram backgrounds
- Highlight areas
- Hover states
- Social graphics

---

## 5. Color Proportions

Recommended approximate usage for the website:

| Color Role | Usage |
|---|---:|
| White | 65% |
| Light gray | 20% |
| Charcoal | 10% |
| Blue | 5% |

Workflow Zero should not be a blue website.

It should be a **white website with a recognizable Workflow Zero blue**.

---

## 6. Logo System

Keep the existing **WZ** mark.

### Recommended logo treatment

Use flat colors:

- **W:** `#20252B`
- **Z:** `#2878F0`

Remove gradients.

This improves:

- Embroidery
- Screen printing
- Vinyl cutting
- Small-size legibility
- Consistency
- Long-term usability

### Official logo versions

Maintain four core versions:

1. **Primary logo**  
   WZ symbol + Workflow Zero wordmark

2. **Symbol**  
   WZ only

3. **One-color dark**  
   Entire logo in charcoal

4. **One-color white**  
   Entire logo in white for dark backgrounds

Avoid creating unnecessary alternate logo variations.

### Brand name styling

Use:

**Workflow Zero**

Avoid:

**WORKFLOW ZERO**

Avoid:

**workflow zero**

Title case feels human, modern, and professional without becoming corporate or startup-like.

---

## 7. Typography

### Primary Typeface

**Manrope**

Use one font family across the entire brand.

Why it fits:

- Modern
- Bold
- Highly readable
- Slightly geometric
- Friendly without being playful
- Clean without feeling sterile
- Works well for both websites and social media

### Font Weights

| Purpose | Weight |
|---|---:|
| Hero headlines | 800 ExtraBold |
| Section headlines | 700 Bold |
| Subheads / buttons | 600 SemiBold |
| Important body text | 500 Medium |
| Body copy | 400 Regular |

Avoid using every available font weight.

Consistency is more important than variety.

---

## 8. Typography Style

Use large, short, conversational headlines.

### Good

> There’s probably an easier way.

> You’re still doing that manually?

> Less busywork. More business.

### Avoid

> Comprehensive AI-Powered Workflow Automation Solutions

### Casing

Use **sentence case**.

Preferred:

> Make the repetitive stuff disappear.

Avoid:

> Make The Repetitive Stuff Disappear

Avoid all caps for primary messaging except for small labels or supporting UI elements.

---

## 9. Website Type Scale

Recommended desktop scale:

| Element | Size | Weight |
|---|---:|---:|
| Hero | 64px | 800 |
| H1 | 52px | 800 |
| H2 | 40px | 700 |
| H3 | 28px | 700 |
| Body large | 20px | 400 |
| Body | 17px | 400 |
| Small | 14px | 500 |
| Button | 16px | 600 |

Body copy should remain comfortably readable because the target audience is made up of small-business owners who may not be technically oriented.

---

## 10. Shape Language

Use rounded rectangles with moderate corner radii.

### Recommended radius system

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
```

Use:

- `8px` for smaller UI elements
- `12px` as the default
- `16px` for larger cards and containers

Avoid excessive pill-shaped UI unless the component specifically benefits from it.

---

## 11. Buttons

### Primary button

- Background: `#2878F0`
- Text: white
- Radius: `10px` to `12px`
- Font: Manrope SemiBold

Example:

> See what’s possible

### Secondary button

- Background: white
- Text: `#20252B`
- Border: `1px solid #E3E6EA`
- Radius: `10px` to `12px`

Example:

> How it works

### Tone

Buttons should feel invitational, not aggressive.

Avoid CTAs such as:

> BOOK YOUR FREE STRATEGY CALL NOW

---

## 12. Website Aesthetic

Recommended section rhythm:

1. White
2. Light gray
3. White
4. White with pale blue accents
5. Occasional charcoal footer or CTA section

Avoid alternating large blocks of saturated color.

### Cards

Recommended card styling:

```css
background: #FFFFFF;
border: 1px solid #E3E6EA;
border-radius: 12px;
```

Use:

- Generous padding
- Very subtle shadows or none
- Clean spacing
- Minimal visual decoration

Avoid:

- Glassmorphism
- Glowing borders
- Dramatic shadows
- Futuristic UI effects

---

## 13. Visual Storytelling

Simple before-and-after diagrams should become a major visual device.

### Example

#### Before

**Email → Copy → Spreadsheet → Copy → CRM → Follow up**

#### After

**Email → Workflow Zero → CRM**

The goal is to make automation understandable at a glance.

Do not use technical architecture diagrams unless the context requires them.

Avoid showing:

**APIs → LLM → Webhook → Middleware → JSON**

The customer should understand the result, not the implementation.

---

## 14. Instagram System

Use a mix of editorial and educational content.

### Post Type 1: Big Thought

Characteristics:

- Mostly white
- Large Manrope headline
- Small WZ mark
- Minimal supporting graphics

Example:

> You’re still copying that by hand?

---

### Post Type 2: Before / After

Use a soft gray background and a simple workflow diagram.

#### Before

Inquiry  
↓  
Email  
↓  
Spreadsheet  
↓  
Reminder  
↓  
Follow-up

#### After

Inquiry  
↓  
Automated workflow  
↓  
Done

---

### Post Type 3: Quick Tip

Use a blue header or blue accent element.

Example:

> **One thing to automate**
>
> Every time someone fills out your contact form, automatically create the lead and assign the follow-up.

This creates visual consistency without making every post look identical.

---

## 15. Graphic Style

Avoid making illustration a major part of the brand.

Prefer:

- Arrows
- Simple lines
- Boxes
- Checkmarks
- Lightweight icons
- Process diagrams
- Oversized WZ shapes
- Simple workflow visuals

### Visual metaphor

Workflow Zero takes:

```text
□ → □ → □ → □ → □
```

and turns it into:

```text
□ → ✓
```

Simplification should be a recurring visual theme.

---

## 16. Brand Voice

### Core rule

**Explain it like you’re talking to the business owner, not their IT department.**

The writing should be:

- Conversational
- Clear
- Calm
- Helpful
- Confident
- Non-technical
- Non-pushy

### Preferred language

Instead of:

> Workflow Zero develops sophisticated AI-driven business process automation solutions.

Use:

> We find the repetitive work slowing your business down and build a better way to handle it.

Instead of:

> Integrate disparate SaaS platforms through intelligent workflow orchestration.

Use:

> Get the tools you already use talking to each other.

Instead of:

> Leverage artificial intelligence to optimize operational efficiency.

Use:

> Spend less time doing work that doesn’t need you.

### Voice summary

**Conversational clarity**

---

## 17. Content Themes

Primary website and social content should focus on:

- Practical automation tips
- Before-and-after workflows
- Repetitive tasks businesses still handle manually
- Easy-to-understand workflow examples
- Time-saving process improvements
- Everyday business problems that automation can simplify

Avoid making the content primarily about AI news or technical implementation.

---

## 18. Things Workflow Zero Should Never Look Like

Avoid:

- Glowing brains
- Robot imagery
- Circuit boards
- Binary code
- Purple and blue AI gradients
- Chrome 3D graphics
- Futuristic interfaces
- Stock photos of people pointing at dashboards
- Corporate handshake imagery
- Suit-and-tie consulting visuals
- Giant claims about revolutionizing business
- Overly technical diagrams
- Aggressive urgency
- "10X your business"
- Startup jargon
- Excessive AI buzzwords

If a design feels like it is about to say **“unlock the power of generative AI,”** it is probably moving in the wrong direction.

---

## 19. Merchandise

The flat-color system should translate easily to apparel.

### White shirt

- Charcoal W
- Blue Z

### Charcoal shirt

- White W
- Blue Z

### Blue shirt

- White single-color WZ mark

### Hat

Use the **WZ symbol only** for embroidery.

Keep merchandise simple and recognizable.

---

## 20. Design Tokens

```css
:root {
  /* Brand */
  --wz-blue: #2878F0;
  --wz-charcoal: #20252B;
  --wz-white: #FFFFFF;

  /* Neutrals */
  --wz-cloud: #F5F6F8;
  --wz-slate: #69727D;
  --wz-line: #E3E6EA;
  --wz-blue-mist: #EAF2FE;

  /* Typography */
  --font-primary: "Manrope", sans-serif;

  /* Font weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

---

## 21. System Summary

| Category | Direction |
|---|---|
| Brand | Workflow Zero |
| Core idea | There’s probably an easier way. |
| Primary promise | Life gets easier |
| Personality | Casual competence |
| Tech intensity | 5/10 |
| Visual style | Clean, bright, friendly, modern |
| Primary color | `#2878F0` |
| Dark color | `#20252B` |
| Main background | `#FFFFFF` |
| Typeface | Manrope |
| Default radius | `12px` |
| Logo style | Flat color WZ |
| Logo prominence | Present but secondary |
| Brand voice | Conversational clarity |
| Primary visual motif | Simplification |
| Primary channels | Website and Instagram |

---

## 22. Final Brand Test

Before publishing a design or piece of copy, ask:

> **Does this make automation feel simpler, or does it only make Workflow Zero look smarter?**

If it mainly exists to make Workflow Zero look technical or impressive, simplify it.

The ideal customer reaction is:

> **“That makes sense. They could probably make my life easier.”**
