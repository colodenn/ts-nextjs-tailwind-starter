// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import prisma from '../../lib/prisma';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session?.user != null) {
    const result = await prisma.visitorCount.create({
      data: {
        user: { connect: { email: String(session.user.email) } },
      },
    });
    res.status(200).json({ name: result });
  } else {
    res.status(401).json({ name: 'Not Authorized' });
  }
}
