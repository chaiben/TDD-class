const config = require('../../config/config');
const express = require('express');
const model = require('../../model/cd-model');
// ###### db mocks
//sqlite - TODO populate correctly
//const mockdb = require('../config/sqlite-mock.db');

//PrismaClient mock - Dependency Injection
const { MockContext, Context, createMockContext } = require('../config/prismaclient-mock');

let mockCtx, ctx;

beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx;
});

test('Assert retrieve data from Categories Table', async() => {
    const data = await model.category(ctx,15);
    expect(data.CATEGORIA).toBe("Whiskey");
});