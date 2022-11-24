import { rest } from 'msw';

import { API_URL } from '~/const/system';
import dashboard from '~/data/dashboard.json';

export const handlers = [
  rest.get(`${API_URL}/dashboard`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json(dashboard));
  }),
];
