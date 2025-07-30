import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormParams } from 'mobx-react-hook-form';
import z from 'zod';
import { $ZodType } from 'zod/v4/core';

type PossibleSchemaVariants = $ZodType<any, any>;

export interface SchemaFormParams<
  TSchema extends PossibleSchemaVariants,
  TContext = any,
> extends Omit<
    FormParams<z.input<TSchema>, TContext, z.output<TSchema>>,
    'resolver'
  > {
  schema: TSchema;
}

export class SchemaForm<
  TSchema extends PossibleSchemaVariants,
  TContext = any,
> extends Form<z.input<TSchema>, TContext, z.output<TSchema>> {
  constructor({ schema, ...params }: SchemaFormParams<TSchema, TContext>) {
    super({ ...params, resolver: zodResolver(schema as any) });
  }
}
