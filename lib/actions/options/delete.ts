"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { getAuthSession } from "@/lib/auth";

export const deleteOption = async (
  questionId: string,
  optionId: string,
  formId: string
) => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    return {
      error: "Not authenticated",
    };
  }

  await prisma.question.findFirstOrThrow({
    where: {
      id: questionId,
      userId: session.user.id,
      formId,
    },
  });

  await prisma.option.delete({
    where: {
      id: optionId,
      questionId,
    },
  });

  revalidatePath(`forms/${formId}`);
};
