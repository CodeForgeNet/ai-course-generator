import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 border-0 shadow-2xl rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col items-center">
            <div className="relative mb-4">
              <span className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 blur-2xl opacity-30 animate-pulse" />
              <Image
                src={"/loader.gif"}
                width={100}
                height={100}
                alt="loader"
                className="relative z-10"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2">
              Please wait...
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-gray-700 dark:text-gray-200 text-center">
            AI is working on your course. This may take a few moments.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
