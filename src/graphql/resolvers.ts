export const resolvers = {
  Query: {
    getPosts: async (
      _parent: any,
      _args: any,
      ctx: { prisma: { post: { findMany: () => any } } }
    ) => {
      return await ctx.prisma.post.findMany();
    },
  },
};
