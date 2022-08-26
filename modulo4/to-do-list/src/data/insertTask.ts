import connection from './../connection';

export default async (title:string, description:string, limitDate:Date, creatorUserId:string): Promise<any> => {
  await connection("Tasks")
    .insert({
      taskId: new Date().getTime(),
      title,
      description,
      limitDate,
      status: "to_do",
      creatorUserId
    })
};