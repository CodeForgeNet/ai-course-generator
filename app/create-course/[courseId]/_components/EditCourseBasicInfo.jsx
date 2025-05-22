import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
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
import { Button } from "@/components/ui/button";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";

function EditCourseBasicInfo({ course, refreshData, edit = true }) {
  const [courseName, setCourseName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    if (course?.courseOutput) {
      setCourseName(course?.courseOutput?.courseName);
      setDescription(course?.courseOutput?.description);
    }
  }, [course]);

  const onUpdateHandler = async () => {
    course.courseOutput.courseName = courseName;
    course.courseOutput.description = description;

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList.id });

    refreshData(true);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <HiOutlinePencilAlt className="cursor-pointer text-black" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course title & Description</DialogTitle>
          <DialogDescription>
            <div className="mt-3">
              <label>Course Title</label>
              <Input
                defaultValue={course?.courseOutput?.courseName}
                onChange={(event) => setCourseName(event?.target.value)}
              />
            </div>
            <div>
              <label>Description</label>
              <Textarea
                className="h-40"
                defaultValue={course?.courseOutput?.description}
                onChange={(event) => setDescription(event?.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
