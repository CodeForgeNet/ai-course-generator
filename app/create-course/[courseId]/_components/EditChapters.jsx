import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { CourseList } from "@/configs/Schema";

function EditChapters({ course, index, refreshData }) {
  const Chapters = course?.courseOutput?.chapters;
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  useEffect(() => {
    setName(Chapters[index].name);
    setAbout(Chapters[index].about);
  }, [course]);
  const onUpdateHandler = async () => {
    course.courseOutput.chapters[index].name = name;
    course.courseOutput.chapters[index].about = about;

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList.id });

    console.log(result);
    refreshData(true);
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <HiOutlinePencilAlt />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Chapter</DialogTitle>
          <DialogDescription>
            Edit the chapter title and description below.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-3 space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-purple-700 dark:text-yellow-200">
              Chapter Title
            </label>
            <Input
              defaultValue={Chapters[index].name}
              onChange={(event) => setName(event?.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-purple-700 dark:text-yellow-200">
              Description
            </label>
            <Textarea
              className="h-40"
              defaultValue={Chapters[index].about}
              onChange={(event) => setAbout(event?.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditChapters;
