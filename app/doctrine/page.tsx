"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DoctrineItem = {
  text: string;
  refs?: string;
};

type DoctrineTab = {
  key: "conduct" | "belief" | "tenets";
  label: string;
  title: string;
  subtitle: string;
  items: DoctrineItem[];
  footerQuote?: { text: string; refs?: string };
};

export default function DoctrinePage() {
  const tabs = useMemo<DoctrineTab[]>(
    () => [
      {
        key: "conduct",
        label: "Rules of Conduct",
        title: "Rules of Conduct",
        subtitle:
          "Practical guidance for worship, community life, and reverence in the House of God.",
        items: [
          {
            text: "Never come to the House of God without praying before coming.",
            refs: "Matthew 6:7; Ephesians 6:18",
          },
          {
            text: "Be in your seat at the commencement of the service. You will thus be a good example to those who are late and neglectful.",
            refs: "Genesis 22:3; Psalms 108:2; Proverbs 8:17; Song of Solomon 7:12",
          },
          {
            text: "Bring your children with you to the House of God. Relatives and servants also have souls. It is your duty and privilege to take care of them.",
            refs: "Matthew 11:14; Exodus 22:10; Acts 10:24; John 1:41,45; Genesis 18:19",
          },
          {
            text: "Make your Pastor your personal friend. His sympathy, support and counsel are needed by you. Constantly pray for him.",
            refs: "1 Thessalonians 2:7; Joel 2:17; Malachi 2:7; Romans 15:30; 2 Corinthians 1:11; Ephesians 6:19; Hebrews 13:17",
          },
          {
            text: "Make the Church your spiritual home.",
            refs: "Acts 2:46-47; Psalm 133:1",
          },
          {
            text: "When conversing never speak disrespectfully or criticisingly of God’s servants or their ministrations, in the presence of your children. If you sow to the wind, you may expect to reap the whirlwind.",
            refs: "Galatians 6:7; Proverbs 22:8; Hosea 8:7",
          },
          {
            text: "Take your Bible with you to the House of God.",
            refs: "Psalms 1:2; 119:16, 72; Romans 15:4; 2 Timothy 3:16-17",
          },
          {
            text: "Enter reverently, pray fervently, listen attentively, give praise from a grateful heart and worship God in the beauty of holiness.",
            refs: "Psalms 118:27-29; Ecclesiastes 5:1; Romans 12:11; James 1:19",
          },
        ],
        footerQuote: {
          text: "Enter into His gates with thanksgiving and into His courts with praise, be thankful unto Him and bless His name.",
          refs: "Psalms 100:4",
        },
      },
      {
        key: "belief",
        label: "Rules of Belief",
        title: "Rules of Belief",
        subtitle:
          "What is expected of every member of the church in commitment, fellowship, and practice.",
        items: [
          {
            text: "A personal testimony of your salvation in Christ.",
            refs: "Acts 4:12; Romans 10:9",
          },
          {
            text: "Your acknowledgment of and obedience to the Order and Officers of the Church: Apostles, Prophets, Evangelists, Pastors, Teachers, Elders and Deacons.",
            refs: "Hebrews 13:17; Ephesians 4:11; 1 Corinthians 12:28",
          },
          {
            text: "Your presence in the meetings of the Church and abidance in full communion; that is, not to absent yourself more than three times from communion without sufficient reason given for your absence.",
            refs: "Hebrews 10:25",
          },
          {
            text: "Your conformity with the fundamental doctrines of the Church, as well as with the two ordinances, namely baptism by immersion, and the Lord's Supper.",
            refs: "2 John 1:9; Romans 6:4; Luke 22:19; 1 Corinthians 11:24",
          },
          {
            text: "That you contribute towards the support of the cause, as taught unto us in the Word of God.",
            refs: "Genesis 14:20; Genesis 28:22; Leviticus 27:30; 1 Chronicles 29:14; Hebrews 7:8",
          },
          {
            text: "That you keep the counsels of the Church within the Church.",
            refs: "Matthew 7:6",
          },
          {
            text: "That you pray for and help every member, remembering that we are joint members in the Body of Christ.",
            refs: "Hebrews 10:24; 1 Corinthians 12:25; 1 Timothy 2:1; Galatians 6:2",
          },
          {
            text: "Endeavoring to keep the unity of the Spirit in the bond of peace.",
            refs: "Ephesians 4:3",
          },
        ],
      },
      {
        key: "tenets",
        label: "Tenets",
        title: "Tenets",
        subtitle:
          "Core doctrines every member is expected to know and believe.",
        items: [
          {
            text: "The Unity of the God-head and the Trinity of the persons there-in.",
            refs: "Genesis 1:1; Matthew 3:16-17; 1 John 5:7",
          },
          {
            text: "The utter depravity of human nature, the necessity for repentance and regeneration and the eternal doom of the finally impenitent (i.e. unrepentant).",
            refs: "Genesis 3:1-19; Isaiah 53:6; Acts 2:38; Acts 17:30; John 5:28-29; Daniel 12:2; Romans 2:7; Romans 6:23; 1 John 1:1-2",
          },
          {
            text: "The Virgin Birth, Sinless Life, Atoning Death, Triumphant Resurrection, Ascension and Abiding intercession of Our Lord Jesus Christ. His second coming and millennial reign upon earth.",
            refs: "John 8:46; John 14:30; Colossians 1:15; 2 Corinthians 5:19; Romans 3:25; Acts 2:36; Philippians 2:9-11; 1 Thessalonians 4:16-17; Revelation 22:20",
          },
          {
            text: "Justification and sanctification of the believer through the finished work of Christ.",
            refs: "Acts 2:38; Luke 15:7; Romans 4:25; Romans 5:16; 1 Corinthians 1:30; 1 Thessalonians 4:30",
          },
          {
            text: "The baptism of the Holy Ghost for believers with signs following.",
            refs: "1 Corinthians 12:8-11; Mark 16:17; Acts 2:4; Galatians 5:22",
          },
          {
            text: "The nine gifts of the Holy Ghost for the edification, exhortation and comfort of the Church, which is the body of Christ.",
            refs: "1 Corinthians 12:4-11",
          },
          {
            text: "The sacraments of baptism by immersion and of the Lord’s Supper.",
            refs: "Romans 6:4, 6:11, 6:13-14; Luke 3:21; Mark 16:16; Luke 2:22-24, 34; Mark 10:16; Luke 22:19-20; Matthew 26:21-29; Acts 20:7",
          },
          {
            text: "The divine inspiration and authority of the Holy Scriptures.",
            refs: "2 Timothy 3:16; 2 Peter 1:21",
          },
          {
            text: "Church government by Apostles, Prophets, Evangelists, Pastors, Teachers, Elders, Deacons and Deaconesses.",
            refs: "Ephesians 4:11-13; 1 Corinthians 12:28",
          },
          {
            text: "The possibility of falling from Grace.",
            refs: "1 Corinthians 10:12; 1 John 5:11; John 15:4; 1 John 5:12; Romans 5:1-2; John 8:51; 1 Timothy 4:1, 16; 2 Timothy 3:13-15; 1 Corinthians 15:1; Colossians 1:21-23",
          },
          {
            text: "The obligatory nature of Tithes and Offerings.",
            refs: "Malachi 3:10; Matthew 23:23; Hebrews 7:1-4; Luke 6:38; Acts 20:35",
          },
          {
            text: "Divine Healing through obedience to the command of our Lord Jesus Christ and Faith in His Name and merit of His Blood for all sickness, disease and infirmities.",
          },
        ],
      },
    ],
    [],
  );

  const [active, setActive] = useState<DoctrineTab["key"]>("conduct");
  const current = tabs.find((t) => t.key === active) ?? tabs[0]!;

  return (
    <main className="bg-background min-h-screen">
      <section className="relative overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/doctrine.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Overlay (VERY IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 🧱 Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-2">
                <Badge className="w-fit">Doctrine</Badge>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  Statements of Faith & Practice
                </h1>
                <p className="text-slate-200 max-w-2xl">
                  Explore the guiding principles of our fellowship: how we live,
                  what we believe, and the doctrines we hold.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="bg-white/10 text-white border-white/20"
              >
                <Link href="/">Back Home</Link>
              </Button>
            </div>

            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Doctrine sections"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {tabs.map((tab) => {
                  const selected = tab.key === active;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(tab.key)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-left transition-colors",
                        selected
                          ? "bg-white text-slate-900"
                          : "text-white/90 hover:bg-white/10",
                      )}
                    >
                      <div className="text-sm font-semibold">{tab.label}</div>
                      <div className="text-xs opacity-80 line-clamp-1">
                        {tab.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <Card className="overflow-hidden">
          <CardHeader className="border-b">
            <CardTitle className="font-serif text-2xl">
              {current.title}
            </CardTitle>
            <CardDescription>{current.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div role="tabpanel" className="grid gap-4">
              <ol className="grid gap-3">
                {current.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl border bg-card/50 px-4 py-4"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="flex-none">
                        <div className="size-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-foreground leading-relaxed">
                          {item.text}
                        </div>
                        {item.refs && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground/80">
                              References:{" "}
                            </span>
                            {item.refs}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {current.footerQuote && (
                <div className="rounded-2xl border bg-muted/40 p-6">
                  <div className="text-lg font-serif text-foreground leading-relaxed">
                    &ldquo;{current.footerQuote.text}&rdquo;
                  </div>
                  {current.footerQuote.refs && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      {current.footerQuote.refs}
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
