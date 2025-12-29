"use client";

import { Edit, Loader2, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { BadgeStatus } from "@/components/shared/Badge-Status";
import { RatingStar } from "@/components/shared/Rating-Star";

import { TESTIMONIAL_CARD_VIEW_PROPS } from "@/common/types/testimonial.props";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    x: -100,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

const processingVariants = {
  processing: {
    opacity: 0.6,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
  idle: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export function CardView({
  filteredItems,
  onDelete,
  onEdit,
  isDeleting,
  isUpdating,
  processingItemId,
}: TESTIMONIAL_CARD_VIEW_PROPS) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {filteredItems.map((item, index) => {
          const { id, author, createdAt, rating, resena, status } = item;

          const isThisItemProcessing = processingItemId === id;
          const isThisItemUpdating = isUpdating && isThisItemProcessing;
          const isThisItemDeleting = isDeleting && isThisItemProcessing;

          return (
            <motion.div
              key={id}
              custom={index}
              variants={processingVariants}
              initial="hidden"
              animate={isThisItemProcessing ? "processing" : "visible"}
              exit="exit"
              whileHover={!isThisItemProcessing ? "hover" : undefined}
              layout
            >
              <Card
                className={cn(
                  "bg-white overflow-hidden transition-all duration-200",
                  isThisItemProcessing ? "opacity-60 pointer-events-none" : ""
                )}
              >
                <CardHeader className="pb-1">
                  <motion.div
                    className="flex items-center justify-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Avatar className="h-14 w-14 rounded-full">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="block">
                      <h3 className="font-semibold text-gray-900">{author.name}</h3>
                      <p className="text-sm text-gray-500">
                        {author.position}, {author.company}
                      </p>
                    </div>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    <RatingStar rating={rating} />

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">"{resena}"</p>

                    <div className="flex items-center justify-between">
                      <BadgeStatus status={status} />

                      <span className="text-xs text-gray-400">{new Date(createdAt).toLocaleDateString("es-PE")}</span>
                    </div>
                  </motion.div>
                </CardContent>

                <CardFooter className="bg-gray-50 px-2 pt-1 flex items-center justify-end gap-x-2 border-t">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="cursor-pointer h-9 px-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                      onClick={() => onEdit(item)}
                      disabled={isThisItemProcessing}
                      title="Editar testimonio"
                    >
                      <AnimatePresence mode="wait">
                        {isThisItemUpdating ? (
                          <motion.div
                            key="updating"
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 180 }}
                            className="flex items-center"
                          >
                            <Loader2 className="w-4 h-4  mr-1.5 animate-spin" />
                            <span className="text-sm font-medium">Editando...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="edit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <Edit className="w-4 h-4 mr-1.5" />
                            <span className="text-sm font-medium">Editar</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="cursor-pointer h-9 px-3 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                    onClick={() => onDelete(item)}
                    disabled={isThisItemProcessing}
                    title="Eliminar testimonio"
                  >
                    {isThisItemDeleting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                        <span className="text-sm font-medium">Eliminando...</span>
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4 mr-1.5" />
                        <span className="text-sm font-medium">Eliminar</span>
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
