"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Check, Copy, Eye, Sparkles } from "lucide-react";
import { gridPatterns } from "../utils/patterns";
import { useState } from "react";

interface PatternShowcaseProps {
  activePattern?: string | null;
  setActivePattern?: (pattern: string | null) => void;
  theme: "light" | "dark";
}

export default function PatternShowcase({
  activePattern,
  setActivePattern,
  theme,
}: PatternShowcaseProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const isPatternDark = theme === "dark";

  // Patterns Categories

  const categories = [
    { id: "all", label: "All Patterns" },
    { id: "gradients", label: "Gradients" },
    { id: "geometric", label: "Geometric" },
    { id: "decorative", label: "Decorative" },
    { id: "effects", label: "Effects" },
  ];

  // filter patterns based on categories

  const filteredPatterns =
    activeTab === "all"
      ? gridPatterns
      : gridPatterns.filter((pattern) => pattern.category === activeTab);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 1000);
    } catch {
      toast.error("Failed to copy code");
    }
  };

  const handleCardInteraction = (patternId: string) => {
    setActiveMobileCard(activeMobileCard === patternId ? null : patternId);
  };

  return (
    <section
      id="pattern-showcase"
      className="container pt-6 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Header */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
              isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
            }`}
          >
            Pattern Library
          </h2>
          <p
            className={`text-sm sm:text-base transition-colors duration-300 ${
              isPatternDark ? "text-gray-300" : "text-muted-foreground"
            }`}
          >
            Tap on mobile or hover on desktop to see options
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mb-8"
      >
        {/* Desktop & Tablet Tabs (show on sm and up) */}
        <TabsList
          className={`
    hidden sm:grid
    grid-cols-2 sm:grid-cols-3 md:grid-cols-5
    w-full h-auto p-1.5
    backdrop-blur-md shadow-lg border
    rounded-xl mb-8 transition-all duration-300
    ${
      isPatternDark
        ? "bg-black/20 border-white/10 hover:bg-black/30"
        : "bg-white/70 border-gray-200/30 hover:bg-white/80"
    }
  `}
        >
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className={`
        flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 
        py-2.5 px-2 sm:px-3 lg:px-4
        text-xs sm:text-sm font-medium
        rounded-lg
        transition-all duration-300 ease-in-out
        min-h-[44px] sm:min-h-[40px]
        relative overflow-hidden
        group
        ${
          isPatternDark
            ? `data-[state=active]:bg-white/10 data-[state=active]:text-white 
               data-[state=active]:shadow-lg data-[state=active]:border 
               data-[state=active]:border-white/20 data-[state=active]:backdrop-blur-sm
               data-[state=inactive]:text-gray-300 
               data-[state=inactive]:hover:text-white
               data-[state=inactive]:hover:bg-white/5`
            : `data-[state=active]:bg-white/90 data-[state=active]:text-gray-900 
               data-[state=active]:shadow-lg data-[state=active]:border 
               data-[state=active]:border-gray-200/40 data-[state=active]:backdrop-blur-sm
               data-[state=inactive]:text-gray-600 
               data-[state=inactive]:hover:text-gray-900
               data-[state=inactive]:hover:bg-white/40`
        }
      `}
            >
              <div
                className={`
          absolute inset-0 rounded-lg opacity-0 
          data-[state=active]:opacity-100 transition-all duration-300
          ${
            isPatternDark
              ? "bg-gradient-to-br from-white/15 to-white/5"
              : "bg-gradient-to-br from-white/95 to-white/80"
          }
        `}
              />
              <span className="font-medium z-10 text-center leading-tight">
                {category.label}
              </span>
              <div
                className={`
          absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
          rounded-full transition-all duration-300 
          group-data-[state=active]:w-8
          ${isPatternDark ? "bg-white/60" : "bg-primary"}
        `}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Mobile Tabs (show on xs only) */}
        <div className="block sm:hidden mb-6">
          <div className="flex flex-wrap gap-2 px-1 pb-2 justify-center">
            {categories.map((category) => (
              <button
                key={`mobile-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`
          flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap
          text-sm font-medium transition-all duration-300 ease-in-out
          backdrop-blur-md shadow-lg border
          hover:scale-[1.02] hover:shadow-xl
          ${
            activeTab === category.id
              ? isPatternDark
                ? "bg-white/15 text-white border-white/20 shadow-lg"
                : "bg-white/90 text-gray-900 border-gray-200/40 shadow-lg"
              : isPatternDark
              ? "bg-black/20 text-gray-300 border-white/10 hover:bg-black/30 hover:text-white hover:border-white/20"
              : "bg-white/60 text-gray-600 border-gray-200/30 hover:bg-white/80 hover:text-gray-900 hover:border-gray-300/40"
          }
        `}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            {/* Pattern count */}
            <div className="mb-6">
              <p
                className={`text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-muted-foreground"
                }`}
              >
                {filteredPatterns.length} pattern
                {filteredPatterns.length !== 1 ? "s" : ""}
                {category.id !== "all" && ` in ${category.label}`}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredPatterns.map((pattern) => (
                <div key={pattern.id} className="group relative">
                  <div
                    className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300 ${
                      activePattern === pattern.id
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    } ${
                      activeMobileCard === pattern.id
                        ? "scale-[1.02] shadow-lg sm:scale-100"
                        : "hover:shadow-lg hover:scale-[1.02]"
                    }`}
                    onClick={() => handleCardInteraction(pattern.id)}
                  >
                    {/* Pattern style */}
                    <div className="absolute inset-0" style={pattern.style} />

                    {/* Badge */}
                    {pattern.badge && (
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                        <Badge
                          variant="secondary"
                          className="gap-1 text-xs bg-background/80 backdrop-blur-sm border-border/50 px-2 py-1"
                        >
                          <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600" />
                          <span>{pattern.badge}</span>
                        </Badge>
                      </div>
                    )}

                    {/* Mobile: Simple preview and copy buttons */}
                    <div className="sm:hidden absolute bottom-2 left-2 right-2 z-10 flex justify-center gap-2 px-2">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(pattern.code, pattern.id);
                        }}
                        className={`flex-1 border-0 text-xs h-8 ${
                          copiedId === pattern.id
                            ? "bg-gray-700 hover:bg-gray-800 text-white"
                            : "bg-gray-900/90 hover:bg-gray-900 text-white"
                        }`}
                        disabled={copiedId === pattern.id}
                      >
                        {copiedId === pattern.id ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Desktop: Hover overlay */}
                    <div className="hidden sm:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-4 drop-shadow-lg">
                          {pattern.name}
                        </h3>
                        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full xs:w-auto">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(pattern.code, pattern.id);
                            }}
                            className={`cursor-pointer shadow-xl backdrop-blur-md gap-1 border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto ${
                              copiedId === pattern.id
                                ? "bg-gray-700 hover:bg-gray-800 text-white border border-gray-500"
                                : "bg-gray-900/90 hover:bg-gray-900 text-white"
                            }`}
                            disabled={copiedId === pattern.id}
                          >
                            {copiedId === pattern.id ? (
                              <>
                                <Check className="h-3 w-3" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredPatterns.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2">
                  No patterns found
                </h3>
                <p className="text-muted-foreground">
                  No patterns available in this category yet.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
