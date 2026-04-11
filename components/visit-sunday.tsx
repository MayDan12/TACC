"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function VisitDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="px-8 py-4 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="w-5 h-5" />
          Visit This Sunday
        </motion.button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Plan Your Visit</DialogTitle>
          <DialogDescription>
            We&apos;d love to have you join us this Sunday. Here are the
            details:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p>
            <strong>📍 Location:</strong> 4544 Dufferin St, North York
          </p>
          <p>
            <strong>⏰ Time:</strong> 10:00 AM
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=4544+Dufferin+St,+North+York,+ON+M3H+5X2"
            target="_blank"
            className="block text-center bg-primary text-white py-2 rounded-md"
          >
            Get Directions
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
