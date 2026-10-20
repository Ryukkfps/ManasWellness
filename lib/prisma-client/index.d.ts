
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CarouselSlide
 * 
 */
export type CarouselSlide = $Result.DefaultSelection<Prisma.$CarouselSlidePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model AboutSection
 * 
 */
export type AboutSection = $Result.DefaultSelection<Prisma.$AboutSectionPayload>
/**
 * Model LegalPage
 * 
 */
export type LegalPage = $Result.DefaultSelection<Prisma.$LegalPagePayload>
/**
 * Model TherapistProfile
 * 
 */
export type TherapistProfile = $Result.DefaultSelection<Prisma.$TherapistProfilePayload>
/**
 * Model SiteSettings
 * 
 */
export type SiteSettings = $Result.DefaultSelection<Prisma.$SiteSettingsPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model Survey
 * 
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>
/**
 * Model SurveyQuestion
 * 
 */
export type SurveyQuestion = $Result.DefaultSelection<Prisma.$SurveyQuestionPayload>
/**
 * Model SurveyResponse
 * 
 */
export type SurveyResponse = $Result.DefaultSelection<Prisma.$SurveyResponsePayload>
/**
 * Model SurveyAnswer
 * 
 */
export type SurveyAnswer = $Result.DefaultSelection<Prisma.$SurveyAnswerPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.carouselSlide`: Exposes CRUD operations for the **CarouselSlide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarouselSlides
    * const carouselSlides = await prisma.carouselSlide.findMany()
    * ```
    */
  get carouselSlide(): Prisma.CarouselSlideDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs>;

  /**
   * `prisma.aboutSection`: Exposes CRUD operations for the **AboutSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutSections
    * const aboutSections = await prisma.aboutSection.findMany()
    * ```
    */
  get aboutSection(): Prisma.AboutSectionDelegate<ExtArgs>;

  /**
   * `prisma.legalPage`: Exposes CRUD operations for the **LegalPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalPages
    * const legalPages = await prisma.legalPage.findMany()
    * ```
    */
  get legalPage(): Prisma.LegalPageDelegate<ExtArgs>;

  /**
   * `prisma.therapistProfile`: Exposes CRUD operations for the **TherapistProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapistProfiles
    * const therapistProfiles = await prisma.therapistProfile.findMany()
    * ```
    */
  get therapistProfile(): Prisma.TherapistProfileDelegate<ExtArgs>;

  /**
   * `prisma.siteSettings`: Exposes CRUD operations for the **SiteSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSettings.findMany()
    * ```
    */
  get siteSettings(): Prisma.SiteSettingsDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs>;

  /**
   * `prisma.surveyQuestion`: Exposes CRUD operations for the **SurveyQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyQuestions
    * const surveyQuestions = await prisma.surveyQuestion.findMany()
    * ```
    */
  get surveyQuestion(): Prisma.SurveyQuestionDelegate<ExtArgs>;

  /**
   * `prisma.surveyResponse`: Exposes CRUD operations for the **SurveyResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyResponses
    * const surveyResponses = await prisma.surveyResponse.findMany()
    * ```
    */
  get surveyResponse(): Prisma.SurveyResponseDelegate<ExtArgs>;

  /**
   * `prisma.surveyAnswer`: Exposes CRUD operations for the **SurveyAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyAnswers
    * const surveyAnswers = await prisma.surveyAnswer.findMany()
    * ```
    */
  get surveyAnswer(): Prisma.SurveyAnswerDelegate<ExtArgs>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CarouselSlide: 'CarouselSlide',
    Service: 'Service',
    ContactInfo: 'ContactInfo',
    Enquiry: 'Enquiry',
    Review: 'Review',
    Appointment: 'Appointment',
    Content: 'Content',
    AboutSection: 'AboutSection',
    LegalPage: 'LegalPage',
    TherapistProfile: 'TherapistProfile',
    SiteSettings: 'SiteSettings',
    Event: 'Event',
    GalleryImage: 'GalleryImage',
    Survey: 'Survey',
    SurveyQuestion: 'SurveyQuestion',
    SurveyResponse: 'SurveyResponse',
    SurveyAnswer: 'SurveyAnswer',
    BlogPost: 'BlogPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "carouselSlide" | "service" | "contactInfo" | "enquiry" | "review" | "appointment" | "content" | "aboutSection" | "legalPage" | "therapistProfile" | "siteSettings" | "event" | "galleryImage" | "survey" | "surveyQuestion" | "surveyResponse" | "surveyAnswer" | "blogPost"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CarouselSlide: {
        payload: Prisma.$CarouselSlidePayload<ExtArgs>
        fields: Prisma.CarouselSlideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarouselSlideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarouselSlideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          findFirst: {
            args: Prisma.CarouselSlideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarouselSlideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          findMany: {
            args: Prisma.CarouselSlideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>[]
          }
          create: {
            args: Prisma.CarouselSlideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          createMany: {
            args: Prisma.CarouselSlideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarouselSlideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          update: {
            args: Prisma.CarouselSlideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          deleteMany: {
            args: Prisma.CarouselSlideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarouselSlideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarouselSlideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarouselSlidePayload>
          }
          aggregate: {
            args: Prisma.CarouselSlideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarouselSlide>
          }
          groupBy: {
            args: Prisma.CarouselSlideGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarouselSlideGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CarouselSlideFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CarouselSlideAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CarouselSlideCountArgs<ExtArgs>
            result: $Utils.Optional<CarouselSlideCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContactInfoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContactInfoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EnquiryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EnquiryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AppointmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AppointmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      AboutSection: {
        payload: Prisma.$AboutSectionPayload<ExtArgs>
        fields: Prisma.AboutSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findFirst: {
            args: Prisma.AboutSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findMany: {
            args: Prisma.AboutSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          create: {
            args: Prisma.AboutSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          createMany: {
            args: Prisma.AboutSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AboutSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          update: {
            args: Prisma.AboutSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          deleteMany: {
            args: Prisma.AboutSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          aggregate: {
            args: Prisma.AboutSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutSection>
          }
          groupBy: {
            args: Prisma.AboutSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AboutSectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AboutSectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AboutSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionCountAggregateOutputType> | number
          }
        }
      }
      LegalPage: {
        payload: Prisma.$LegalPagePayload<ExtArgs>
        fields: Prisma.LegalPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          findFirst: {
            args: Prisma.LegalPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          findMany: {
            args: Prisma.LegalPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>[]
          }
          create: {
            args: Prisma.LegalPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          createMany: {
            args: Prisma.LegalPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LegalPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          update: {
            args: Prisma.LegalPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          deleteMany: {
            args: Prisma.LegalPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegalPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LegalPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalPagePayload>
          }
          aggregate: {
            args: Prisma.LegalPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegalPage>
          }
          groupBy: {
            args: Prisma.LegalPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegalPageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LegalPageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LegalPageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LegalPageCountArgs<ExtArgs>
            result: $Utils.Optional<LegalPageCountAggregateOutputType> | number
          }
        }
      }
      TherapistProfile: {
        payload: Prisma.$TherapistProfilePayload<ExtArgs>
        fields: Prisma.TherapistProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          findFirst: {
            args: Prisma.TherapistProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          findMany: {
            args: Prisma.TherapistProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>[]
          }
          create: {
            args: Prisma.TherapistProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          createMany: {
            args: Prisma.TherapistProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TherapistProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          update: {
            args: Prisma.TherapistProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          deleteMany: {
            args: Prisma.TherapistProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TherapistProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistProfilePayload>
          }
          aggregate: {
            args: Prisma.TherapistProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapistProfile>
          }
          groupBy: {
            args: Prisma.TherapistProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TherapistProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TherapistProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TherapistProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistProfileCountAggregateOutputType> | number
          }
        }
      }
      SiteSettings: {
        payload: Prisma.$SiteSettingsPayload<ExtArgs>
        fields: Prisma.SiteSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          findMany: {
            args: Prisma.SiteSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>[]
          }
          create: {
            args: Prisma.SiteSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          createMany: {
            args: Prisma.SiteSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiteSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          update: {
            args: Prisma.SiteSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingsPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSettings>
          }
          groupBy: {
            args: Prisma.SiteSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SiteSettingsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SiteSettingsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SiteSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingsCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GalleryImageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GalleryImageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SurveyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SurveyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      SurveyQuestion: {
        payload: Prisma.$SurveyQuestionPayload<ExtArgs>
        fields: Prisma.SurveyQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          findFirst: {
            args: Prisma.SurveyQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          findMany: {
            args: Prisma.SurveyQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>[]
          }
          create: {
            args: Prisma.SurveyQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          createMany: {
            args: Prisma.SurveyQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          update: {
            args: Prisma.SurveyQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          deleteMany: {
            args: Prisma.SurveyQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyQuestionPayload>
          }
          aggregate: {
            args: Prisma.SurveyQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyQuestion>
          }
          groupBy: {
            args: Prisma.SurveyQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyQuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SurveyQuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SurveyQuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SurveyQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyQuestionCountAggregateOutputType> | number
          }
        }
      }
      SurveyResponse: {
        payload: Prisma.$SurveyResponsePayload<ExtArgs>
        fields: Prisma.SurveyResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          findFirst: {
            args: Prisma.SurveyResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          findMany: {
            args: Prisma.SurveyResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>[]
          }
          create: {
            args: Prisma.SurveyResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          createMany: {
            args: Prisma.SurveyResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          update: {
            args: Prisma.SurveyResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          deleteMany: {
            args: Prisma.SurveyResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsePayload>
          }
          aggregate: {
            args: Prisma.SurveyResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyResponse>
          }
          groupBy: {
            args: Prisma.SurveyResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyResponseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SurveyResponseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SurveyResponseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SurveyResponseCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyResponseCountAggregateOutputType> | number
          }
        }
      }
      SurveyAnswer: {
        payload: Prisma.$SurveyAnswerPayload<ExtArgs>
        fields: Prisma.SurveyAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          findFirst: {
            args: Prisma.SurveyAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          findMany: {
            args: Prisma.SurveyAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>[]
          }
          create: {
            args: Prisma.SurveyAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          createMany: {
            args: Prisma.SurveyAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurveyAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          update: {
            args: Prisma.SurveyAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          deleteMany: {
            args: Prisma.SurveyAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurveyAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyAnswerPayload>
          }
          aggregate: {
            args: Prisma.SurveyAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyAnswer>
          }
          groupBy: {
            args: Prisma.SurveyAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyAnswerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SurveyAnswerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SurveyAnswerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SurveyAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyAnswerCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlogPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlogPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    images: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | EventCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
  }


  /**
   * Count Type SurveyCountOutputType
   */

  export type SurveyCountOutputType = {
    questions: number
  }

  export type SurveyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | SurveyCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     */
    select?: SurveyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyQuestionWhereInput
  }


  /**
   * Count Type SurveyResponseCountOutputType
   */

  export type SurveyResponseCountOutputType = {
    answers: number
  }

  export type SurveyResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | SurveyResponseCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * SurveyResponseCountOutputType without action
   */
  export type SurveyResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponseCountOutputType
     */
    select?: SurveyResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveyResponseCountOutputType without action
   */
  export type SurveyResponseCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model CarouselSlide
   */

  export type AggregateCarouselSlide = {
    _count: CarouselSlideCountAggregateOutputType | null
    _avg: CarouselSlideAvgAggregateOutputType | null
    _sum: CarouselSlideSumAggregateOutputType | null
    _min: CarouselSlideMinAggregateOutputType | null
    _max: CarouselSlideMaxAggregateOutputType | null
  }

  export type CarouselSlideAvgAggregateOutputType = {
    order: number | null
  }

  export type CarouselSlideSumAggregateOutputType = {
    order: number | null
  }

  export type CarouselSlideMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    image: string | null
    ctaText: string | null
    ctaLink: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarouselSlideMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    image: string | null
    ctaText: string | null
    ctaLink: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarouselSlideCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    description: number
    image: number
    ctaText: number
    ctaLink: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarouselSlideAvgAggregateInputType = {
    order?: true
  }

  export type CarouselSlideSumAggregateInputType = {
    order?: true
  }

  export type CarouselSlideMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    image?: true
    ctaText?: true
    ctaLink?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarouselSlideMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    image?: true
    ctaText?: true
    ctaLink?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarouselSlideCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    image?: true
    ctaText?: true
    ctaLink?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarouselSlideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarouselSlide to aggregate.
     */
    where?: CarouselSlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarouselSlides to fetch.
     */
    orderBy?: CarouselSlideOrderByWithRelationInput | CarouselSlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarouselSlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarouselSlides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarouselSlides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarouselSlides
    **/
    _count?: true | CarouselSlideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarouselSlideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarouselSlideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarouselSlideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarouselSlideMaxAggregateInputType
  }

  export type GetCarouselSlideAggregateType<T extends CarouselSlideAggregateArgs> = {
        [P in keyof T & keyof AggregateCarouselSlide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarouselSlide[P]>
      : GetScalarType<T[P], AggregateCarouselSlide[P]>
  }




  export type CarouselSlideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarouselSlideWhereInput
    orderBy?: CarouselSlideOrderByWithAggregationInput | CarouselSlideOrderByWithAggregationInput[]
    by: CarouselSlideScalarFieldEnum[] | CarouselSlideScalarFieldEnum
    having?: CarouselSlideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarouselSlideCountAggregateInputType | true
    _avg?: CarouselSlideAvgAggregateInputType
    _sum?: CarouselSlideSumAggregateInputType
    _min?: CarouselSlideMinAggregateInputType
    _max?: CarouselSlideMaxAggregateInputType
  }

  export type CarouselSlideGroupByOutputType = {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    ctaText: string
    ctaLink: string | null
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CarouselSlideCountAggregateOutputType | null
    _avg: CarouselSlideAvgAggregateOutputType | null
    _sum: CarouselSlideSumAggregateOutputType | null
    _min: CarouselSlideMinAggregateOutputType | null
    _max: CarouselSlideMaxAggregateOutputType | null
  }

  type GetCarouselSlideGroupByPayload<T extends CarouselSlideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarouselSlideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarouselSlideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarouselSlideGroupByOutputType[P]>
            : GetScalarType<T[P], CarouselSlideGroupByOutputType[P]>
        }
      >
    >


  export type CarouselSlideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    image?: boolean
    ctaText?: boolean
    ctaLink?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carouselSlide"]>


  export type CarouselSlideSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    image?: boolean
    ctaText?: boolean
    ctaLink?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CarouselSlidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarouselSlide"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string
      description: string
      image: string
      ctaText: string
      ctaLink: string | null
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carouselSlide"]>
    composites: {}
  }

  type CarouselSlideGetPayload<S extends boolean | null | undefined | CarouselSlideDefaultArgs> = $Result.GetResult<Prisma.$CarouselSlidePayload, S>

  type CarouselSlideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarouselSlideFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarouselSlideCountAggregateInputType | true
    }

  export interface CarouselSlideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarouselSlide'], meta: { name: 'CarouselSlide' } }
    /**
     * Find zero or one CarouselSlide that matches the filter.
     * @param {CarouselSlideFindUniqueArgs} args - Arguments to find a CarouselSlide
     * @example
     * // Get one CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarouselSlideFindUniqueArgs>(args: SelectSubset<T, CarouselSlideFindUniqueArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CarouselSlide that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarouselSlideFindUniqueOrThrowArgs} args - Arguments to find a CarouselSlide
     * @example
     * // Get one CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarouselSlideFindUniqueOrThrowArgs>(args: SelectSubset<T, CarouselSlideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CarouselSlide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideFindFirstArgs} args - Arguments to find a CarouselSlide
     * @example
     * // Get one CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarouselSlideFindFirstArgs>(args?: SelectSubset<T, CarouselSlideFindFirstArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CarouselSlide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideFindFirstOrThrowArgs} args - Arguments to find a CarouselSlide
     * @example
     * // Get one CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarouselSlideFindFirstOrThrowArgs>(args?: SelectSubset<T, CarouselSlideFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CarouselSlides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarouselSlides
     * const carouselSlides = await prisma.carouselSlide.findMany()
     * 
     * // Get first 10 CarouselSlides
     * const carouselSlides = await prisma.carouselSlide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carouselSlideWithIdOnly = await prisma.carouselSlide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarouselSlideFindManyArgs>(args?: SelectSubset<T, CarouselSlideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CarouselSlide.
     * @param {CarouselSlideCreateArgs} args - Arguments to create a CarouselSlide.
     * @example
     * // Create one CarouselSlide
     * const CarouselSlide = await prisma.carouselSlide.create({
     *   data: {
     *     // ... data to create a CarouselSlide
     *   }
     * })
     * 
     */
    create<T extends CarouselSlideCreateArgs>(args: SelectSubset<T, CarouselSlideCreateArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CarouselSlides.
     * @param {CarouselSlideCreateManyArgs} args - Arguments to create many CarouselSlides.
     * @example
     * // Create many CarouselSlides
     * const carouselSlide = await prisma.carouselSlide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarouselSlideCreateManyArgs>(args?: SelectSubset<T, CarouselSlideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarouselSlide.
     * @param {CarouselSlideDeleteArgs} args - Arguments to delete one CarouselSlide.
     * @example
     * // Delete one CarouselSlide
     * const CarouselSlide = await prisma.carouselSlide.delete({
     *   where: {
     *     // ... filter to delete one CarouselSlide
     *   }
     * })
     * 
     */
    delete<T extends CarouselSlideDeleteArgs>(args: SelectSubset<T, CarouselSlideDeleteArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CarouselSlide.
     * @param {CarouselSlideUpdateArgs} args - Arguments to update one CarouselSlide.
     * @example
     * // Update one CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarouselSlideUpdateArgs>(args: SelectSubset<T, CarouselSlideUpdateArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CarouselSlides.
     * @param {CarouselSlideDeleteManyArgs} args - Arguments to filter CarouselSlides to delete.
     * @example
     * // Delete a few CarouselSlides
     * const { count } = await prisma.carouselSlide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarouselSlideDeleteManyArgs>(args?: SelectSubset<T, CarouselSlideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarouselSlides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarouselSlides
     * const carouselSlide = await prisma.carouselSlide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarouselSlideUpdateManyArgs>(args: SelectSubset<T, CarouselSlideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarouselSlide.
     * @param {CarouselSlideUpsertArgs} args - Arguments to update or create a CarouselSlide.
     * @example
     * // Update or create a CarouselSlide
     * const carouselSlide = await prisma.carouselSlide.upsert({
     *   create: {
     *     // ... data to create a CarouselSlide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarouselSlide we want to update
     *   }
     * })
     */
    upsert<T extends CarouselSlideUpsertArgs>(args: SelectSubset<T, CarouselSlideUpsertArgs<ExtArgs>>): Prisma__CarouselSlideClient<$Result.GetResult<Prisma.$CarouselSlidePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more CarouselSlides that matches the filter.
     * @param {CarouselSlideFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const carouselSlide = await prisma.carouselSlide.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: CarouselSlideFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CarouselSlide.
     * @param {CarouselSlideAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const carouselSlide = await prisma.carouselSlide.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CarouselSlideAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CarouselSlides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideCountArgs} args - Arguments to filter CarouselSlides to count.
     * @example
     * // Count the number of CarouselSlides
     * const count = await prisma.carouselSlide.count({
     *   where: {
     *     // ... the filter for the CarouselSlides we want to count
     *   }
     * })
    **/
    count<T extends CarouselSlideCountArgs>(
      args?: Subset<T, CarouselSlideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarouselSlideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarouselSlide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarouselSlideAggregateArgs>(args: Subset<T, CarouselSlideAggregateArgs>): Prisma.PrismaPromise<GetCarouselSlideAggregateType<T>>

    /**
     * Group by CarouselSlide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarouselSlideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarouselSlideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarouselSlideGroupByArgs['orderBy'] }
        : { orderBy?: CarouselSlideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarouselSlideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarouselSlideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarouselSlide model
   */
  readonly fields: CarouselSlideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarouselSlide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarouselSlideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarouselSlide model
   */ 
  interface CarouselSlideFieldRefs {
    readonly id: FieldRef<"CarouselSlide", 'String'>
    readonly title: FieldRef<"CarouselSlide", 'String'>
    readonly subtitle: FieldRef<"CarouselSlide", 'String'>
    readonly description: FieldRef<"CarouselSlide", 'String'>
    readonly image: FieldRef<"CarouselSlide", 'String'>
    readonly ctaText: FieldRef<"CarouselSlide", 'String'>
    readonly ctaLink: FieldRef<"CarouselSlide", 'String'>
    readonly order: FieldRef<"CarouselSlide", 'Int'>
    readonly isActive: FieldRef<"CarouselSlide", 'Boolean'>
    readonly createdAt: FieldRef<"CarouselSlide", 'DateTime'>
    readonly updatedAt: FieldRef<"CarouselSlide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarouselSlide findUnique
   */
  export type CarouselSlideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter, which CarouselSlide to fetch.
     */
    where: CarouselSlideWhereUniqueInput
  }

  /**
   * CarouselSlide findUniqueOrThrow
   */
  export type CarouselSlideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter, which CarouselSlide to fetch.
     */
    where: CarouselSlideWhereUniqueInput
  }

  /**
   * CarouselSlide findFirst
   */
  export type CarouselSlideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter, which CarouselSlide to fetch.
     */
    where?: CarouselSlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarouselSlides to fetch.
     */
    orderBy?: CarouselSlideOrderByWithRelationInput | CarouselSlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarouselSlides.
     */
    cursor?: CarouselSlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarouselSlides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarouselSlides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarouselSlides.
     */
    distinct?: CarouselSlideScalarFieldEnum | CarouselSlideScalarFieldEnum[]
  }

  /**
   * CarouselSlide findFirstOrThrow
   */
  export type CarouselSlideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter, which CarouselSlide to fetch.
     */
    where?: CarouselSlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarouselSlides to fetch.
     */
    orderBy?: CarouselSlideOrderByWithRelationInput | CarouselSlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarouselSlides.
     */
    cursor?: CarouselSlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarouselSlides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarouselSlides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarouselSlides.
     */
    distinct?: CarouselSlideScalarFieldEnum | CarouselSlideScalarFieldEnum[]
  }

  /**
   * CarouselSlide findMany
   */
  export type CarouselSlideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter, which CarouselSlides to fetch.
     */
    where?: CarouselSlideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarouselSlides to fetch.
     */
    orderBy?: CarouselSlideOrderByWithRelationInput | CarouselSlideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarouselSlides.
     */
    cursor?: CarouselSlideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarouselSlides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarouselSlides.
     */
    skip?: number
    distinct?: CarouselSlideScalarFieldEnum | CarouselSlideScalarFieldEnum[]
  }

  /**
   * CarouselSlide create
   */
  export type CarouselSlideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * The data needed to create a CarouselSlide.
     */
    data: XOR<CarouselSlideCreateInput, CarouselSlideUncheckedCreateInput>
  }

  /**
   * CarouselSlide createMany
   */
  export type CarouselSlideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarouselSlides.
     */
    data: CarouselSlideCreateManyInput | CarouselSlideCreateManyInput[]
  }

  /**
   * CarouselSlide update
   */
  export type CarouselSlideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * The data needed to update a CarouselSlide.
     */
    data: XOR<CarouselSlideUpdateInput, CarouselSlideUncheckedUpdateInput>
    /**
     * Choose, which CarouselSlide to update.
     */
    where: CarouselSlideWhereUniqueInput
  }

  /**
   * CarouselSlide updateMany
   */
  export type CarouselSlideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarouselSlides.
     */
    data: XOR<CarouselSlideUpdateManyMutationInput, CarouselSlideUncheckedUpdateManyInput>
    /**
     * Filter which CarouselSlides to update
     */
    where?: CarouselSlideWhereInput
  }

  /**
   * CarouselSlide upsert
   */
  export type CarouselSlideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * The filter to search for the CarouselSlide to update in case it exists.
     */
    where: CarouselSlideWhereUniqueInput
    /**
     * In case the CarouselSlide found by the `where` argument doesn't exist, create a new CarouselSlide with this data.
     */
    create: XOR<CarouselSlideCreateInput, CarouselSlideUncheckedCreateInput>
    /**
     * In case the CarouselSlide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarouselSlideUpdateInput, CarouselSlideUncheckedUpdateInput>
  }

  /**
   * CarouselSlide delete
   */
  export type CarouselSlideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
    /**
     * Filter which CarouselSlide to delete.
     */
    where: CarouselSlideWhereUniqueInput
  }

  /**
   * CarouselSlide deleteMany
   */
  export type CarouselSlideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarouselSlides to delete
     */
    where?: CarouselSlideWhereInput
  }

  /**
   * CarouselSlide findRaw
   */
  export type CarouselSlideFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CarouselSlide aggregateRaw
   */
  export type CarouselSlideAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CarouselSlide without action
   */
  export type CarouselSlideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarouselSlide
     */
    select?: CarouselSlideSelect<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    durationMinutes: number | null
    order: number | null
  }

  export type ServiceSumAggregateOutputType = {
    durationMinutes: number | null
    order: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    durationMinutes: number | null
    priceLabel: string | null
    image: string | null
    icon: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    durationMinutes: number | null
    priceLabel: string | null
    image: string | null
    icon: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    shortDescription: number
    description: number
    durationMinutes: number
    priceLabel: number
    modes: number
    image: number
    icon: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    durationMinutes?: true
    order?: true
  }

  export type ServiceSumAggregateInputType = {
    durationMinutes?: true
    order?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    description?: true
    durationMinutes?: true
    priceLabel?: true
    image?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    description?: true
    durationMinutes?: true
    priceLabel?: true
    image?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    shortDescription?: true
    description?: true
    durationMinutes?: true
    priceLabel?: true
    modes?: true
    image?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    slug: string
    shortDescription: string | null
    description: string
    durationMinutes: number | null
    priceLabel: string | null
    modes: string[]
    image: string | null
    icon: string | null
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    durationMinutes?: boolean
    priceLabel?: boolean
    modes?: boolean
    image?: boolean
    icon?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>


  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    durationMinutes?: boolean
    priceLabel?: boolean
    modes?: boolean
    image?: boolean
    icon?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      shortDescription: string | null
      description: string
      durationMinutes: number | null
      priceLabel: string | null
      modes: string[]
      image: string | null
      icon: string | null
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * @param {ServiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service = await prisma.service.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ServiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service.
     * @param {ServiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service = await prisma.service.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly slug: FieldRef<"Service", 'String'>
    readonly shortDescription: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly durationMinutes: FieldRef<"Service", 'Int'>
    readonly priceLabel: FieldRef<"Service", 'String'>
    readonly modes: FieldRef<"Service", 'String[]'>
    readonly image: FieldRef<"Service", 'String'>
    readonly icon: FieldRef<"Service", 'String'>
    readonly order: FieldRef<"Service", 'Int'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service findRaw
   */
  export type ServiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service aggregateRaw
   */
  export type ServiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    email: string | null
    workingHours: string | null
    mapEmbedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    email: string | null
    workingHours: string | null
    mapEmbedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    address: number
    phone: number
    email: number
    workingHours: number
    mapEmbedUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    workingHours?: true
    mapEmbedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    workingHours?: true
    mapEmbedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    workingHours?: true
    mapEmbedUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    address: string
    phone: string
    email: string
    workingHours: string | null
    mapEmbedUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    workingHours?: boolean
    mapEmbedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>


  export type ContactInfoSelectScalar = {
    id?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    workingHours?: boolean
    mapEmbedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      phone: string
      email: string
      workingHours: string | null
      mapEmbedUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * @param {ContactInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contactInfo = await prisma.contactInfo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ContactInfoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContactInfo.
     * @param {ContactInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contactInfo = await prisma.contactInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContactInfoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInfo model
   */ 
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly address: FieldRef<"ContactInfo", 'String'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly workingHours: FieldRef<"ContactInfo", 'String'>
    readonly mapEmbedUrl: FieldRef<"ContactInfo", 'String'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
  }

  /**
   * ContactInfo findRaw
   */
  export type ContactInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContactInfo aggregateRaw
   */
  export type ContactInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    source: string | null
    status: string | null
    adminNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    source: string | null
    status: string | null
    adminNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    source: number
    status: number
    adminNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    source?: true
    status?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    source?: true
    status?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    source?: true
    status?: true
    adminNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    subject: string
    message: string
    source: string
    status: string
    adminNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enquiry"]>


  export type EnquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    source?: boolean
    status?: boolean
    adminNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      subject: string
      message: string
      source: string
      status: string
      adminNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Enquiries that matches the filter.
     * @param {EnquiryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const enquiry = await prisma.enquiry.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EnquiryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Enquiry.
     * @param {EnquiryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const enquiry = await prisma.enquiry.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EnquiryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enquiry model
   */ 
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'String'>
    readonly name: FieldRef<"Enquiry", 'String'>
    readonly email: FieldRef<"Enquiry", 'String'>
    readonly phone: FieldRef<"Enquiry", 'String'>
    readonly subject: FieldRef<"Enquiry", 'String'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly source: FieldRef<"Enquiry", 'String'>
    readonly status: FieldRef<"Enquiry", 'String'>
    readonly adminNotes: FieldRef<"Enquiry", 'String'>
    readonly createdAt: FieldRef<"Enquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
  }

  /**
   * Enquiry findRaw
   */
  export type EnquiryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Enquiry aggregateRaw
   */
  export type EnquiryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    author: string | null
    content: string | null
    rating: number | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    author: string | null
    content: string | null
    rating: number | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    author: number
    content: number
    rating: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    author?: true
    content?: true
    rating?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    author?: true
    content?: true
    rating?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    author?: true
    content?: true
    rating?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    author: string
    content: string
    rating: number
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    content?: boolean
    rating?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>


  export type ReviewSelectScalar = {
    id?: boolean
    author?: boolean
    content?: boolean
    rating?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string
      content: string
      rating: number
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly author: FieldRef<"Review", 'String'>
    readonly content: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly isApproved: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    date: Date | null
    time: string | null
    service: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    date: Date | null
    time: string | null
    service: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    date: number
    time: number
    service: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    date?: true
    time?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    date?: true
    time?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    date?: true
    time?: true
    service?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    date: Date
    time: string
    service: string
    message: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    time?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointment"]>


  export type AppointmentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    time?: boolean
    service?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      date: Date
      time: string
      service: string
      message: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * @param {AppointmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const appointment = await prisma.appointment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AppointmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Appointment.
     * @param {AppointmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const appointment = await prisma.appointment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AppointmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly name: FieldRef<"Appointment", 'String'>
    readonly email: FieldRef<"Appointment", 'String'>
    readonly phone: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly time: FieldRef<"Appointment", 'String'>
    readonly service: FieldRef<"Appointment", 'String'>
    readonly message: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment findRaw
   */
  export type AppointmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointment aggregateRaw
   */
  export type AppointmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    overlayOpacity: number | null
    order: number | null
  }

  export type ContentSumAggregateOutputType = {
    overlayOpacity: number | null
    order: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    backgroundImage: string | null
    ctaText: string | null
    ctaLink: string | null
    textColor: string | null
    overlayOpacity: number | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    backgroundImage: string | null
    ctaText: string | null
    ctaLink: string | null
    textColor: string | null
    overlayOpacity: number | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    description: number
    backgroundImage: number
    ctaText: number
    ctaLink: number
    textColor: number
    overlayOpacity: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    overlayOpacity?: true
    order?: true
  }

  export type ContentSumAggregateInputType = {
    overlayOpacity?: true
    order?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    backgroundImage?: true
    ctaText?: true
    ctaLink?: true
    textColor?: true
    overlayOpacity?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    backgroundImage?: true
    ctaText?: true
    ctaLink?: true
    textColor?: true
    overlayOpacity?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    backgroundImage?: true
    ctaText?: true
    ctaLink?: true
    textColor?: true
    overlayOpacity?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    title: string
    subtitle: string | null
    description: string
    backgroundImage: string
    ctaText: string | null
    ctaLink: string | null
    textColor: string
    overlayOpacity: number
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    backgroundImage?: boolean
    ctaText?: boolean
    ctaLink?: boolean
    textColor?: boolean
    overlayOpacity?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["content"]>


  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    backgroundImage?: boolean
    ctaText?: boolean
    ctaLink?: boolean
    textColor?: boolean
    overlayOpacity?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string | null
      description: string
      backgroundImage: string
      ctaText: string | null
      ctaLink: string | null
      textColor: string
      overlayOpacity: number
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Contents that matches the filter.
     * @param {ContentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const content = await prisma.content.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ContentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Content.
     * @param {ContentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const content = await prisma.content.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */ 
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly subtitle: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
    readonly backgroundImage: FieldRef<"Content", 'String'>
    readonly ctaText: FieldRef<"Content", 'String'>
    readonly ctaLink: FieldRef<"Content", 'String'>
    readonly textColor: FieldRef<"Content", 'String'>
    readonly overlayOpacity: FieldRef<"Content", 'Float'>
    readonly order: FieldRef<"Content", 'Int'>
    readonly isActive: FieldRef<"Content", 'Boolean'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
  }

  /**
   * Content findRaw
   */
  export type ContentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Content aggregateRaw
   */
  export type ContentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
  }


  /**
   * Model AboutSection
   */

  export type AggregateAboutSection = {
    _count: AboutSectionCountAggregateOutputType | null
    _avg: AboutSectionAvgAggregateOutputType | null
    _sum: AboutSectionSumAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  export type AboutSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type AboutSectionSumAggregateOutputType = {
    order: number | null
  }

  export type AboutSectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    content: string | null
    image: string | null
    layout: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutSectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    content: string | null
    image: string | null
    layout: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutSectionCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    content: number
    image: number
    layout: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutSectionAvgAggregateInputType = {
    order?: true
  }

  export type AboutSectionSumAggregateInputType = {
    order?: true
  }

  export type AboutSectionMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    content?: true
    image?: true
    layout?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutSectionMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    content?: true
    image?: true
    layout?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutSectionCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    content?: true
    image?: true
    layout?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSection to aggregate.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutSections
    **/
    _count?: true | AboutSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutSectionMaxAggregateInputType
  }

  export type GetAboutSectionAggregateType<T extends AboutSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutSection[P]>
      : GetScalarType<T[P], AggregateAboutSection[P]>
  }




  export type AboutSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutSectionWhereInput
    orderBy?: AboutSectionOrderByWithAggregationInput | AboutSectionOrderByWithAggregationInput[]
    by: AboutSectionScalarFieldEnum[] | AboutSectionScalarFieldEnum
    having?: AboutSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutSectionCountAggregateInputType | true
    _avg?: AboutSectionAvgAggregateInputType
    _sum?: AboutSectionSumAggregateInputType
    _min?: AboutSectionMinAggregateInputType
    _max?: AboutSectionMaxAggregateInputType
  }

  export type AboutSectionGroupByOutputType = {
    id: string
    title: string
    subtitle: string | null
    content: string
    image: string
    layout: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AboutSectionCountAggregateOutputType | null
    _avg: AboutSectionAvgAggregateOutputType | null
    _sum: AboutSectionSumAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  type GetAboutSectionGroupByPayload<T extends AboutSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
        }
      >
    >


  export type AboutSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    image?: boolean
    layout?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutSection"]>


  export type AboutSectionSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    image?: boolean
    layout?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AboutSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string | null
      content: string
      image: string
      layout: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutSection"]>
    composites: {}
  }

  type AboutSectionGetPayload<S extends boolean | null | undefined | AboutSectionDefaultArgs> = $Result.GetResult<Prisma.$AboutSectionPayload, S>

  type AboutSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutSectionCountAggregateInputType | true
    }

  export interface AboutSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutSection'], meta: { name: 'AboutSection' } }
    /**
     * Find zero or one AboutSection that matches the filter.
     * @param {AboutSectionFindUniqueArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutSectionFindUniqueArgs>(args: SelectSubset<T, AboutSectionFindUniqueArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutSectionFindUniqueOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutSectionFindFirstArgs>(args?: SelectSubset<T, AboutSectionFindFirstArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutSections
     * const aboutSections = await prisma.aboutSection.findMany()
     * 
     * // Get first 10 AboutSections
     * const aboutSections = await prisma.aboutSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutSectionFindManyArgs>(args?: SelectSubset<T, AboutSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutSection.
     * @param {AboutSectionCreateArgs} args - Arguments to create a AboutSection.
     * @example
     * // Create one AboutSection
     * const AboutSection = await prisma.aboutSection.create({
     *   data: {
     *     // ... data to create a AboutSection
     *   }
     * })
     * 
     */
    create<T extends AboutSectionCreateArgs>(args: SelectSubset<T, AboutSectionCreateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutSections.
     * @param {AboutSectionCreateManyArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutSectionCreateManyArgs>(args?: SelectSubset<T, AboutSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AboutSection.
     * @param {AboutSectionDeleteArgs} args - Arguments to delete one AboutSection.
     * @example
     * // Delete one AboutSection
     * const AboutSection = await prisma.aboutSection.delete({
     *   where: {
     *     // ... filter to delete one AboutSection
     *   }
     * })
     * 
     */
    delete<T extends AboutSectionDeleteArgs>(args: SelectSubset<T, AboutSectionDeleteArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutSection.
     * @param {AboutSectionUpdateArgs} args - Arguments to update one AboutSection.
     * @example
     * // Update one AboutSection
     * const aboutSection = await prisma.aboutSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutSectionUpdateArgs>(args: SelectSubset<T, AboutSectionUpdateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutSections.
     * @param {AboutSectionDeleteManyArgs} args - Arguments to filter AboutSections to delete.
     * @example
     * // Delete a few AboutSections
     * const { count } = await prisma.aboutSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutSectionDeleteManyArgs>(args?: SelectSubset<T, AboutSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutSectionUpdateManyArgs>(args: SelectSubset<T, AboutSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutSection.
     * @param {AboutSectionUpsertArgs} args - Arguments to update or create a AboutSection.
     * @example
     * // Update or create a AboutSection
     * const aboutSection = await prisma.aboutSection.upsert({
     *   create: {
     *     // ... data to create a AboutSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutSection we want to update
     *   }
     * })
     */
    upsert<T extends AboutSectionUpsertArgs>(args: SelectSubset<T, AboutSectionUpsertArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more AboutSections that matches the filter.
     * @param {AboutSectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aboutSection = await prisma.aboutSection.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AboutSectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AboutSection.
     * @param {AboutSectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aboutSection = await prisma.aboutSection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AboutSectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionCountArgs} args - Arguments to filter AboutSections to count.
     * @example
     * // Count the number of AboutSections
     * const count = await prisma.aboutSection.count({
     *   where: {
     *     // ... the filter for the AboutSections we want to count
     *   }
     * })
    **/
    count<T extends AboutSectionCountArgs>(
      args?: Subset<T, AboutSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutSectionAggregateArgs>(args: Subset<T, AboutSectionAggregateArgs>): Prisma.PrismaPromise<GetAboutSectionAggregateType<T>>

    /**
     * Group by AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutSectionGroupByArgs['orderBy'] }
        : { orderBy?: AboutSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutSection model
   */
  readonly fields: AboutSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutSection model
   */ 
  interface AboutSectionFieldRefs {
    readonly id: FieldRef<"AboutSection", 'String'>
    readonly title: FieldRef<"AboutSection", 'String'>
    readonly subtitle: FieldRef<"AboutSection", 'String'>
    readonly content: FieldRef<"AboutSection", 'String'>
    readonly image: FieldRef<"AboutSection", 'String'>
    readonly layout: FieldRef<"AboutSection", 'String'>
    readonly order: FieldRef<"AboutSection", 'Int'>
    readonly isActive: FieldRef<"AboutSection", 'Boolean'>
    readonly createdAt: FieldRef<"AboutSection", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutSection findUnique
   */
  export type AboutSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findUniqueOrThrow
   */
  export type AboutSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findFirst
   */
  export type AboutSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findFirstOrThrow
   */
  export type AboutSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findMany
   */
  export type AboutSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter, which AboutSections to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection create
   */
  export type AboutSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutSection.
     */
    data: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
  }

  /**
   * AboutSection createMany
   */
  export type AboutSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
  }

  /**
   * AboutSection update
   */
  export type AboutSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutSection.
     */
    data: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
    /**
     * Choose, which AboutSection to update.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection updateMany
   */
  export type AboutSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
  }

  /**
   * AboutSection upsert
   */
  export type AboutSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutSection to update in case it exists.
     */
    where: AboutSectionWhereUniqueInput
    /**
     * In case the AboutSection found by the `where` argument doesn't exist, create a new AboutSection with this data.
     */
    create: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
    /**
     * In case the AboutSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
  }

  /**
   * AboutSection delete
   */
  export type AboutSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Filter which AboutSection to delete.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection deleteMany
   */
  export type AboutSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSections to delete
     */
    where?: AboutSectionWhereInput
  }

  /**
   * AboutSection findRaw
   */
  export type AboutSectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AboutSection aggregateRaw
   */
  export type AboutSectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AboutSection without action
   */
  export type AboutSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
  }


  /**
   * Model LegalPage
   */

  export type AggregateLegalPage = {
    _count: LegalPageCountAggregateOutputType | null
    _min: LegalPageMinAggregateOutputType | null
    _max: LegalPageMaxAggregateOutputType | null
  }

  export type LegalPageMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalPageMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalPageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegalPageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalPageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalPageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegalPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalPage to aggregate.
     */
    where?: LegalPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalPages to fetch.
     */
    orderBy?: LegalPageOrderByWithRelationInput | LegalPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalPages
    **/
    _count?: true | LegalPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalPageMaxAggregateInputType
  }

  export type GetLegalPageAggregateType<T extends LegalPageAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalPage[P]>
      : GetScalarType<T[P], AggregateLegalPage[P]>
  }




  export type LegalPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalPageWhereInput
    orderBy?: LegalPageOrderByWithAggregationInput | LegalPageOrderByWithAggregationInput[]
    by: LegalPageScalarFieldEnum[] | LegalPageScalarFieldEnum
    having?: LegalPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalPageCountAggregateInputType | true
    _min?: LegalPageMinAggregateInputType
    _max?: LegalPageMaxAggregateInputType
  }

  export type LegalPageGroupByOutputType = {
    id: string
    slug: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: LegalPageCountAggregateOutputType | null
    _min: LegalPageMinAggregateOutputType | null
    _max: LegalPageMaxAggregateOutputType | null
  }

  type GetLegalPageGroupByPayload<T extends LegalPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalPageGroupByOutputType[P]>
            : GetScalarType<T[P], LegalPageGroupByOutputType[P]>
        }
      >
    >


  export type LegalPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["legalPage"]>


  export type LegalPageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LegalPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legalPage"]>
    composites: {}
  }

  type LegalPageGetPayload<S extends boolean | null | undefined | LegalPageDefaultArgs> = $Result.GetResult<Prisma.$LegalPagePayload, S>

  type LegalPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegalPageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegalPageCountAggregateInputType | true
    }

  export interface LegalPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalPage'], meta: { name: 'LegalPage' } }
    /**
     * Find zero or one LegalPage that matches the filter.
     * @param {LegalPageFindUniqueArgs} args - Arguments to find a LegalPage
     * @example
     * // Get one LegalPage
     * const legalPage = await prisma.legalPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegalPageFindUniqueArgs>(args: SelectSubset<T, LegalPageFindUniqueArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LegalPage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LegalPageFindUniqueOrThrowArgs} args - Arguments to find a LegalPage
     * @example
     * // Get one LegalPage
     * const legalPage = await prisma.legalPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegalPageFindUniqueOrThrowArgs>(args: SelectSubset<T, LegalPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LegalPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageFindFirstArgs} args - Arguments to find a LegalPage
     * @example
     * // Get one LegalPage
     * const legalPage = await prisma.legalPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegalPageFindFirstArgs>(args?: SelectSubset<T, LegalPageFindFirstArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LegalPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageFindFirstOrThrowArgs} args - Arguments to find a LegalPage
     * @example
     * // Get one LegalPage
     * const legalPage = await prisma.legalPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegalPageFindFirstOrThrowArgs>(args?: SelectSubset<T, LegalPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LegalPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalPages
     * const legalPages = await prisma.legalPage.findMany()
     * 
     * // Get first 10 LegalPages
     * const legalPages = await prisma.legalPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalPageWithIdOnly = await prisma.legalPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegalPageFindManyArgs>(args?: SelectSubset<T, LegalPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LegalPage.
     * @param {LegalPageCreateArgs} args - Arguments to create a LegalPage.
     * @example
     * // Create one LegalPage
     * const LegalPage = await prisma.legalPage.create({
     *   data: {
     *     // ... data to create a LegalPage
     *   }
     * })
     * 
     */
    create<T extends LegalPageCreateArgs>(args: SelectSubset<T, LegalPageCreateArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LegalPages.
     * @param {LegalPageCreateManyArgs} args - Arguments to create many LegalPages.
     * @example
     * // Create many LegalPages
     * const legalPage = await prisma.legalPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegalPageCreateManyArgs>(args?: SelectSubset<T, LegalPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LegalPage.
     * @param {LegalPageDeleteArgs} args - Arguments to delete one LegalPage.
     * @example
     * // Delete one LegalPage
     * const LegalPage = await prisma.legalPage.delete({
     *   where: {
     *     // ... filter to delete one LegalPage
     *   }
     * })
     * 
     */
    delete<T extends LegalPageDeleteArgs>(args: SelectSubset<T, LegalPageDeleteArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LegalPage.
     * @param {LegalPageUpdateArgs} args - Arguments to update one LegalPage.
     * @example
     * // Update one LegalPage
     * const legalPage = await prisma.legalPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegalPageUpdateArgs>(args: SelectSubset<T, LegalPageUpdateArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LegalPages.
     * @param {LegalPageDeleteManyArgs} args - Arguments to filter LegalPages to delete.
     * @example
     * // Delete a few LegalPages
     * const { count } = await prisma.legalPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegalPageDeleteManyArgs>(args?: SelectSubset<T, LegalPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalPages
     * const legalPage = await prisma.legalPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegalPageUpdateManyArgs>(args: SelectSubset<T, LegalPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegalPage.
     * @param {LegalPageUpsertArgs} args - Arguments to update or create a LegalPage.
     * @example
     * // Update or create a LegalPage
     * const legalPage = await prisma.legalPage.upsert({
     *   create: {
     *     // ... data to create a LegalPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalPage we want to update
     *   }
     * })
     */
    upsert<T extends LegalPageUpsertArgs>(args: SelectSubset<T, LegalPageUpsertArgs<ExtArgs>>): Prisma__LegalPageClient<$Result.GetResult<Prisma.$LegalPagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more LegalPages that matches the filter.
     * @param {LegalPageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const legalPage = await prisma.legalPage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: LegalPageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LegalPage.
     * @param {LegalPageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const legalPage = await prisma.legalPage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LegalPageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LegalPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageCountArgs} args - Arguments to filter LegalPages to count.
     * @example
     * // Count the number of LegalPages
     * const count = await prisma.legalPage.count({
     *   where: {
     *     // ... the filter for the LegalPages we want to count
     *   }
     * })
    **/
    count<T extends LegalPageCountArgs>(
      args?: Subset<T, LegalPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegalPageAggregateArgs>(args: Subset<T, LegalPageAggregateArgs>): Prisma.PrismaPromise<GetLegalPageAggregateType<T>>

    /**
     * Group by LegalPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegalPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalPageGroupByArgs['orderBy'] }
        : { orderBy?: LegalPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegalPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalPage model
   */
  readonly fields: LegalPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LegalPage model
   */ 
  interface LegalPageFieldRefs {
    readonly id: FieldRef<"LegalPage", 'String'>
    readonly slug: FieldRef<"LegalPage", 'String'>
    readonly title: FieldRef<"LegalPage", 'String'>
    readonly content: FieldRef<"LegalPage", 'String'>
    readonly createdAt: FieldRef<"LegalPage", 'DateTime'>
    readonly updatedAt: FieldRef<"LegalPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LegalPage findUnique
   */
  export type LegalPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter, which LegalPage to fetch.
     */
    where: LegalPageWhereUniqueInput
  }

  /**
   * LegalPage findUniqueOrThrow
   */
  export type LegalPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter, which LegalPage to fetch.
     */
    where: LegalPageWhereUniqueInput
  }

  /**
   * LegalPage findFirst
   */
  export type LegalPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter, which LegalPage to fetch.
     */
    where?: LegalPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalPages to fetch.
     */
    orderBy?: LegalPageOrderByWithRelationInput | LegalPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalPages.
     */
    cursor?: LegalPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalPages.
     */
    distinct?: LegalPageScalarFieldEnum | LegalPageScalarFieldEnum[]
  }

  /**
   * LegalPage findFirstOrThrow
   */
  export type LegalPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter, which LegalPage to fetch.
     */
    where?: LegalPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalPages to fetch.
     */
    orderBy?: LegalPageOrderByWithRelationInput | LegalPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalPages.
     */
    cursor?: LegalPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalPages.
     */
    distinct?: LegalPageScalarFieldEnum | LegalPageScalarFieldEnum[]
  }

  /**
   * LegalPage findMany
   */
  export type LegalPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter, which LegalPages to fetch.
     */
    where?: LegalPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalPages to fetch.
     */
    orderBy?: LegalPageOrderByWithRelationInput | LegalPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalPages.
     */
    cursor?: LegalPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalPages.
     */
    skip?: number
    distinct?: LegalPageScalarFieldEnum | LegalPageScalarFieldEnum[]
  }

  /**
   * LegalPage create
   */
  export type LegalPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * The data needed to create a LegalPage.
     */
    data: XOR<LegalPageCreateInput, LegalPageUncheckedCreateInput>
  }

  /**
   * LegalPage createMany
   */
  export type LegalPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalPages.
     */
    data: LegalPageCreateManyInput | LegalPageCreateManyInput[]
  }

  /**
   * LegalPage update
   */
  export type LegalPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * The data needed to update a LegalPage.
     */
    data: XOR<LegalPageUpdateInput, LegalPageUncheckedUpdateInput>
    /**
     * Choose, which LegalPage to update.
     */
    where: LegalPageWhereUniqueInput
  }

  /**
   * LegalPage updateMany
   */
  export type LegalPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalPages.
     */
    data: XOR<LegalPageUpdateManyMutationInput, LegalPageUncheckedUpdateManyInput>
    /**
     * Filter which LegalPages to update
     */
    where?: LegalPageWhereInput
  }

  /**
   * LegalPage upsert
   */
  export type LegalPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * The filter to search for the LegalPage to update in case it exists.
     */
    where: LegalPageWhereUniqueInput
    /**
     * In case the LegalPage found by the `where` argument doesn't exist, create a new LegalPage with this data.
     */
    create: XOR<LegalPageCreateInput, LegalPageUncheckedCreateInput>
    /**
     * In case the LegalPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalPageUpdateInput, LegalPageUncheckedUpdateInput>
  }

  /**
   * LegalPage delete
   */
  export type LegalPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
    /**
     * Filter which LegalPage to delete.
     */
    where: LegalPageWhereUniqueInput
  }

  /**
   * LegalPage deleteMany
   */
  export type LegalPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalPages to delete
     */
    where?: LegalPageWhereInput
  }

  /**
   * LegalPage findRaw
   */
  export type LegalPageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LegalPage aggregateRaw
   */
  export type LegalPageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LegalPage without action
   */
  export type LegalPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalPage
     */
    select?: LegalPageSelect<ExtArgs> | null
  }


  /**
   * Model TherapistProfile
   */

  export type AggregateTherapistProfile = {
    _count: TherapistProfileCountAggregateOutputType | null
    _avg: TherapistProfileAvgAggregateOutputType | null
    _sum: TherapistProfileSumAggregateOutputType | null
    _min: TherapistProfileMinAggregateOutputType | null
    _max: TherapistProfileMaxAggregateOutputType | null
  }

  export type TherapistProfileAvgAggregateOutputType = {
    yearsExperience: number | null
  }

  export type TherapistProfileSumAggregateOutputType = {
    yearsExperience: number | null
  }

  export type TherapistProfileMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    title: string | null
    photo: string | null
    shortBio: string | null
    approach: string | null
    yearsExperience: number | null
    registrationNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistProfileMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    title: string | null
    photo: string | null
    shortBio: string | null
    approach: string | null
    yearsExperience: number | null
    registrationNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistProfileCountAggregateOutputType = {
    id: number
    fullName: number
    title: number
    photo: number
    shortBio: number
    qualifications: number
    specialisations: number
    languages: number
    approach: number
    yearsExperience: number
    registrationNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapistProfileAvgAggregateInputType = {
    yearsExperience?: true
  }

  export type TherapistProfileSumAggregateInputType = {
    yearsExperience?: true
  }

  export type TherapistProfileMinAggregateInputType = {
    id?: true
    fullName?: true
    title?: true
    photo?: true
    shortBio?: true
    approach?: true
    yearsExperience?: true
    registrationNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistProfileMaxAggregateInputType = {
    id?: true
    fullName?: true
    title?: true
    photo?: true
    shortBio?: true
    approach?: true
    yearsExperience?: true
    registrationNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistProfileCountAggregateInputType = {
    id?: true
    fullName?: true
    title?: true
    photo?: true
    shortBio?: true
    qualifications?: true
    specialisations?: true
    languages?: true
    approach?: true
    yearsExperience?: true
    registrationNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapistProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistProfile to aggregate.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapistProfiles
    **/
    _count?: true | TherapistProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistProfileMaxAggregateInputType
  }

  export type GetTherapistProfileAggregateType<T extends TherapistProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapistProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapistProfile[P]>
      : GetScalarType<T[P], AggregateTherapistProfile[P]>
  }




  export type TherapistProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistProfileWhereInput
    orderBy?: TherapistProfileOrderByWithAggregationInput | TherapistProfileOrderByWithAggregationInput[]
    by: TherapistProfileScalarFieldEnum[] | TherapistProfileScalarFieldEnum
    having?: TherapistProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistProfileCountAggregateInputType | true
    _avg?: TherapistProfileAvgAggregateInputType
    _sum?: TherapistProfileSumAggregateInputType
    _min?: TherapistProfileMinAggregateInputType
    _max?: TherapistProfileMaxAggregateInputType
  }

  export type TherapistProfileGroupByOutputType = {
    id: string
    fullName: string
    title: string | null
    photo: string | null
    shortBio: string | null
    qualifications: string[]
    specialisations: string[]
    languages: string[]
    approach: string | null
    yearsExperience: number | null
    registrationNo: string | null
    createdAt: Date
    updatedAt: Date
    _count: TherapistProfileCountAggregateOutputType | null
    _avg: TherapistProfileAvgAggregateOutputType | null
    _sum: TherapistProfileSumAggregateOutputType | null
    _min: TherapistProfileMinAggregateOutputType | null
    _max: TherapistProfileMaxAggregateOutputType | null
  }

  type GetTherapistProfileGroupByPayload<T extends TherapistProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistProfileGroupByOutputType[P]>
        }
      >
    >


  export type TherapistProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    title?: boolean
    photo?: boolean
    shortBio?: boolean
    qualifications?: boolean
    specialisations?: boolean
    languages?: boolean
    approach?: boolean
    yearsExperience?: boolean
    registrationNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapistProfile"]>


  export type TherapistProfileSelectScalar = {
    id?: boolean
    fullName?: boolean
    title?: boolean
    photo?: boolean
    shortBio?: boolean
    qualifications?: boolean
    specialisations?: boolean
    languages?: boolean
    approach?: boolean
    yearsExperience?: boolean
    registrationNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TherapistProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapistProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      title: string | null
      photo: string | null
      shortBio: string | null
      qualifications: string[]
      specialisations: string[]
      languages: string[]
      approach: string | null
      yearsExperience: number | null
      registrationNo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapistProfile"]>
    composites: {}
  }

  type TherapistProfileGetPayload<S extends boolean | null | undefined | TherapistProfileDefaultArgs> = $Result.GetResult<Prisma.$TherapistProfilePayload, S>

  type TherapistProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TherapistProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TherapistProfileCountAggregateInputType | true
    }

  export interface TherapistProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapistProfile'], meta: { name: 'TherapistProfile' } }
    /**
     * Find zero or one TherapistProfile that matches the filter.
     * @param {TherapistProfileFindUniqueArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistProfileFindUniqueArgs>(args: SelectSubset<T, TherapistProfileFindUniqueArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TherapistProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TherapistProfileFindUniqueOrThrowArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TherapistProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindFirstArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistProfileFindFirstArgs>(args?: SelectSubset<T, TherapistProfileFindFirstArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TherapistProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindFirstOrThrowArgs} args - Arguments to find a TherapistProfile
     * @example
     * // Get one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TherapistProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapistProfiles
     * const therapistProfiles = await prisma.therapistProfile.findMany()
     * 
     * // Get first 10 TherapistProfiles
     * const therapistProfiles = await prisma.therapistProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistProfileWithIdOnly = await prisma.therapistProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistProfileFindManyArgs>(args?: SelectSubset<T, TherapistProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TherapistProfile.
     * @param {TherapistProfileCreateArgs} args - Arguments to create a TherapistProfile.
     * @example
     * // Create one TherapistProfile
     * const TherapistProfile = await prisma.therapistProfile.create({
     *   data: {
     *     // ... data to create a TherapistProfile
     *   }
     * })
     * 
     */
    create<T extends TherapistProfileCreateArgs>(args: SelectSubset<T, TherapistProfileCreateArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TherapistProfiles.
     * @param {TherapistProfileCreateManyArgs} args - Arguments to create many TherapistProfiles.
     * @example
     * // Create many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistProfileCreateManyArgs>(args?: SelectSubset<T, TherapistProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TherapistProfile.
     * @param {TherapistProfileDeleteArgs} args - Arguments to delete one TherapistProfile.
     * @example
     * // Delete one TherapistProfile
     * const TherapistProfile = await prisma.therapistProfile.delete({
     *   where: {
     *     // ... filter to delete one TherapistProfile
     *   }
     * })
     * 
     */
    delete<T extends TherapistProfileDeleteArgs>(args: SelectSubset<T, TherapistProfileDeleteArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TherapistProfile.
     * @param {TherapistProfileUpdateArgs} args - Arguments to update one TherapistProfile.
     * @example
     * // Update one TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistProfileUpdateArgs>(args: SelectSubset<T, TherapistProfileUpdateArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TherapistProfiles.
     * @param {TherapistProfileDeleteManyArgs} args - Arguments to filter TherapistProfiles to delete.
     * @example
     * // Delete a few TherapistProfiles
     * const { count } = await prisma.therapistProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistProfileDeleteManyArgs>(args?: SelectSubset<T, TherapistProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapistProfiles
     * const therapistProfile = await prisma.therapistProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistProfileUpdateManyArgs>(args: SelectSubset<T, TherapistProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TherapistProfile.
     * @param {TherapistProfileUpsertArgs} args - Arguments to update or create a TherapistProfile.
     * @example
     * // Update or create a TherapistProfile
     * const therapistProfile = await prisma.therapistProfile.upsert({
     *   create: {
     *     // ... data to create a TherapistProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapistProfile we want to update
     *   }
     * })
     */
    upsert<T extends TherapistProfileUpsertArgs>(args: SelectSubset<T, TherapistProfileUpsertArgs<ExtArgs>>): Prisma__TherapistProfileClient<$Result.GetResult<Prisma.$TherapistProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more TherapistProfiles that matches the filter.
     * @param {TherapistProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const therapistProfile = await prisma.therapistProfile.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TherapistProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TherapistProfile.
     * @param {TherapistProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const therapistProfile = await prisma.therapistProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TherapistProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TherapistProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileCountArgs} args - Arguments to filter TherapistProfiles to count.
     * @example
     * // Count the number of TherapistProfiles
     * const count = await prisma.therapistProfile.count({
     *   where: {
     *     // ... the filter for the TherapistProfiles we want to count
     *   }
     * })
    **/
    count<T extends TherapistProfileCountArgs>(
      args?: Subset<T, TherapistProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistProfileAggregateArgs>(args: Subset<T, TherapistProfileAggregateArgs>): Prisma.PrismaPromise<GetTherapistProfileAggregateType<T>>

    /**
     * Group by TherapistProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistProfileGroupByArgs['orderBy'] }
        : { orderBy?: TherapistProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapistProfile model
   */
  readonly fields: TherapistProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapistProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapistProfile model
   */ 
  interface TherapistProfileFieldRefs {
    readonly id: FieldRef<"TherapistProfile", 'String'>
    readonly fullName: FieldRef<"TherapistProfile", 'String'>
    readonly title: FieldRef<"TherapistProfile", 'String'>
    readonly photo: FieldRef<"TherapistProfile", 'String'>
    readonly shortBio: FieldRef<"TherapistProfile", 'String'>
    readonly qualifications: FieldRef<"TherapistProfile", 'String[]'>
    readonly specialisations: FieldRef<"TherapistProfile", 'String[]'>
    readonly languages: FieldRef<"TherapistProfile", 'String[]'>
    readonly approach: FieldRef<"TherapistProfile", 'String'>
    readonly yearsExperience: FieldRef<"TherapistProfile", 'Int'>
    readonly registrationNo: FieldRef<"TherapistProfile", 'String'>
    readonly createdAt: FieldRef<"TherapistProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TherapistProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapistProfile findUnique
   */
  export type TherapistProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile findUniqueOrThrow
   */
  export type TherapistProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile findFirst
   */
  export type TherapistProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistProfiles.
     */
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile findFirstOrThrow
   */
  export type TherapistProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter, which TherapistProfile to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapistProfiles.
     */
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile findMany
   */
  export type TherapistProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter, which TherapistProfiles to fetch.
     */
    where?: TherapistProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapistProfiles to fetch.
     */
    orderBy?: TherapistProfileOrderByWithRelationInput | TherapistProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapistProfiles.
     */
    cursor?: TherapistProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapistProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapistProfiles.
     */
    skip?: number
    distinct?: TherapistProfileScalarFieldEnum | TherapistProfileScalarFieldEnum[]
  }

  /**
   * TherapistProfile create
   */
  export type TherapistProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a TherapistProfile.
     */
    data: XOR<TherapistProfileCreateInput, TherapistProfileUncheckedCreateInput>
  }

  /**
   * TherapistProfile createMany
   */
  export type TherapistProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapistProfiles.
     */
    data: TherapistProfileCreateManyInput | TherapistProfileCreateManyInput[]
  }

  /**
   * TherapistProfile update
   */
  export type TherapistProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a TherapistProfile.
     */
    data: XOR<TherapistProfileUpdateInput, TherapistProfileUncheckedUpdateInput>
    /**
     * Choose, which TherapistProfile to update.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile updateMany
   */
  export type TherapistProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapistProfiles.
     */
    data: XOR<TherapistProfileUpdateManyMutationInput, TherapistProfileUncheckedUpdateManyInput>
    /**
     * Filter which TherapistProfiles to update
     */
    where?: TherapistProfileWhereInput
  }

  /**
   * TherapistProfile upsert
   */
  export type TherapistProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the TherapistProfile to update in case it exists.
     */
    where: TherapistProfileWhereUniqueInput
    /**
     * In case the TherapistProfile found by the `where` argument doesn't exist, create a new TherapistProfile with this data.
     */
    create: XOR<TherapistProfileCreateInput, TherapistProfileUncheckedCreateInput>
    /**
     * In case the TherapistProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistProfileUpdateInput, TherapistProfileUncheckedUpdateInput>
  }

  /**
   * TherapistProfile delete
   */
  export type TherapistProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
    /**
     * Filter which TherapistProfile to delete.
     */
    where: TherapistProfileWhereUniqueInput
  }

  /**
   * TherapistProfile deleteMany
   */
  export type TherapistProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapistProfiles to delete
     */
    where?: TherapistProfileWhereInput
  }

  /**
   * TherapistProfile findRaw
   */
  export type TherapistProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TherapistProfile aggregateRaw
   */
  export type TherapistProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TherapistProfile without action
   */
  export type TherapistProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistProfile
     */
    select?: TherapistProfileSelect<ExtArgs> | null
  }


  /**
   * Model SiteSettings
   */

  export type AggregateSiteSettings = {
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  export type SiteSettingsMinAggregateOutputType = {
    id: string | null
    siteName: string | null
    tagline: string | null
    metaDescription: string | null
    ogImage: string | null
    crisisNotice: string | null
    cookieConsentEnabled: boolean | null
    themePreset: string | null
    fontPair: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsMaxAggregateOutputType = {
    id: string | null
    siteName: string | null
    tagline: string | null
    metaDescription: string | null
    ogImage: string | null
    crisisNotice: string | null
    cookieConsentEnabled: boolean | null
    themePreset: string | null
    fontPair: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingsCountAggregateOutputType = {
    id: number
    siteName: number
    tagline: number
    metaDescription: number
    ogImage: number
    crisisNotice: number
    cookieConsentEnabled: number
    themePreset: number
    fontPair: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingsMinAggregateInputType = {
    id?: true
    siteName?: true
    tagline?: true
    metaDescription?: true
    ogImage?: true
    crisisNotice?: true
    cookieConsentEnabled?: true
    themePreset?: true
    fontPair?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsMaxAggregateInputType = {
    id?: true
    siteName?: true
    tagline?: true
    metaDescription?: true
    ogImage?: true
    crisisNotice?: true
    cookieConsentEnabled?: true
    themePreset?: true
    fontPair?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingsCountAggregateInputType = {
    id?: true
    siteName?: true
    tagline?: true
    metaDescription?: true
    ogImage?: true
    crisisNotice?: true
    cookieConsentEnabled?: true
    themePreset?: true
    fontPair?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to aggregate.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type GetSiteSettingsAggregateType<T extends SiteSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSettings[P]>
      : GetScalarType<T[P], AggregateSiteSettings[P]>
  }




  export type SiteSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingsWhereInput
    orderBy?: SiteSettingsOrderByWithAggregationInput | SiteSettingsOrderByWithAggregationInput[]
    by: SiteSettingsScalarFieldEnum[] | SiteSettingsScalarFieldEnum
    having?: SiteSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingsCountAggregateInputType | true
    _min?: SiteSettingsMinAggregateInputType
    _max?: SiteSettingsMaxAggregateInputType
  }

  export type SiteSettingsGroupByOutputType = {
    id: string
    siteName: string
    tagline: string | null
    metaDescription: string | null
    ogImage: string | null
    crisisNotice: string | null
    cookieConsentEnabled: boolean
    themePreset: string
    fontPair: string
    createdAt: Date
    updatedAt: Date
    _count: SiteSettingsCountAggregateOutputType | null
    _min: SiteSettingsMinAggregateOutputType | null
    _max: SiteSettingsMaxAggregateOutputType | null
  }

  type GetSiteSettingsGroupByPayload<T extends SiteSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteName?: boolean
    tagline?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    crisisNotice?: boolean
    cookieConsentEnabled?: boolean
    themePreset?: boolean
    fontPair?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSettings"]>


  export type SiteSettingsSelectScalar = {
    id?: boolean
    siteName?: boolean
    tagline?: boolean
    metaDescription?: boolean
    ogImage?: boolean
    crisisNotice?: boolean
    cookieConsentEnabled?: boolean
    themePreset?: boolean
    fontPair?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SiteSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteName: string
      tagline: string | null
      metaDescription: string | null
      ogImage: string | null
      crisisNotice: string | null
      cookieConsentEnabled: boolean
      themePreset: string
      fontPair: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteSettings"]>
    composites: {}
  }

  type SiteSettingsGetPayload<S extends boolean | null | undefined | SiteSettingsDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingsPayload, S>

  type SiteSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteSettingsCountAggregateInputType | true
    }

  export interface SiteSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSettings'], meta: { name: 'SiteSettings' } }
    /**
     * Find zero or one SiteSettings that matches the filter.
     * @param {SiteSettingsFindUniqueArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingsFindUniqueArgs>(args: SelectSubset<T, SiteSettingsFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteSettingsFindUniqueOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingsFindFirstArgs>(args?: SelectSubset<T, SiteSettingsFindFirstArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindFirstOrThrowArgs} args - Arguments to find a SiteSettings
     * @example
     * // Get one SiteSettings
     * const siteSettings = await prisma.siteSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingsWithIdOnly = await prisma.siteSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingsFindManyArgs>(args?: SelectSubset<T, SiteSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteSettings.
     * @param {SiteSettingsCreateArgs} args - Arguments to create a SiteSettings.
     * @example
     * // Create one SiteSettings
     * const SiteSettings = await prisma.siteSettings.create({
     *   data: {
     *     // ... data to create a SiteSettings
     *   }
     * })
     * 
     */
    create<T extends SiteSettingsCreateArgs>(args: SelectSubset<T, SiteSettingsCreateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingsCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSettings = await prisma.siteSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingsCreateManyArgs>(args?: SelectSubset<T, SiteSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteSettings.
     * @param {SiteSettingsDeleteArgs} args - Arguments to delete one SiteSettings.
     * @example
     * // Delete one SiteSettings
     * const SiteSettings = await prisma.siteSettings.delete({
     *   where: {
     *     // ... filter to delete one SiteSettings
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingsDeleteArgs>(args: SelectSubset<T, SiteSettingsDeleteArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteSettings.
     * @param {SiteSettingsUpdateArgs} args - Arguments to update one SiteSettings.
     * @example
     * // Update one SiteSettings
     * const siteSettings = await prisma.siteSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingsUpdateArgs>(args: SelectSubset<T, SiteSettingsUpdateArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingsDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingsDeleteManyArgs>(args?: SelectSubset<T, SiteSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSettings = await prisma.siteSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingsUpdateManyArgs>(args: SelectSubset<T, SiteSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSettings.
     * @param {SiteSettingsUpsertArgs} args - Arguments to update or create a SiteSettings.
     * @example
     * // Update or create a SiteSettings
     * const siteSettings = await prisma.siteSettings.upsert({
     *   create: {
     *     // ... data to create a SiteSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSettings we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingsUpsertArgs>(args: SelectSubset<T, SiteSettingsUpsertArgs<ExtArgs>>): Prisma__SiteSettingsClient<$Result.GetResult<Prisma.$SiteSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * @param {SiteSettingsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const siteSettings = await prisma.siteSettings.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SiteSettingsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SiteSettings.
     * @param {SiteSettingsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const siteSettings = await prisma.siteSettings.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SiteSettingsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSettings.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingsCountArgs>(
      args?: Subset<T, SiteSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingsAggregateArgs>(args: Subset<T, SiteSettingsAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingsAggregateType<T>>

    /**
     * Group by SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSettings model
   */
  readonly fields: SiteSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSettings model
   */ 
  interface SiteSettingsFieldRefs {
    readonly id: FieldRef<"SiteSettings", 'String'>
    readonly siteName: FieldRef<"SiteSettings", 'String'>
    readonly tagline: FieldRef<"SiteSettings", 'String'>
    readonly metaDescription: FieldRef<"SiteSettings", 'String'>
    readonly ogImage: FieldRef<"SiteSettings", 'String'>
    readonly crisisNotice: FieldRef<"SiteSettings", 'String'>
    readonly cookieConsentEnabled: FieldRef<"SiteSettings", 'Boolean'>
    readonly themePreset: FieldRef<"SiteSettings", 'String'>
    readonly fontPair: FieldRef<"SiteSettings", 'String'>
    readonly createdAt: FieldRef<"SiteSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSettings findUnique
   */
  export type SiteSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findUniqueOrThrow
   */
  export type SiteSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings findFirst
   */
  export type SiteSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findFirstOrThrow
   */
  export type SiteSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings findMany
   */
  export type SiteSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingsOrderByWithRelationInput | SiteSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingsScalarFieldEnum | SiteSettingsScalarFieldEnum[]
  }

  /**
   * SiteSettings create
   */
  export type SiteSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteSettings.
     */
    data: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
  }

  /**
   * SiteSettings createMany
   */
  export type SiteSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingsCreateManyInput | SiteSettingsCreateManyInput[]
  }

  /**
   * SiteSettings update
   */
  export type SiteSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteSettings.
     */
    data: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
    /**
     * Choose, which SiteSettings to update.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings updateMany
   */
  export type SiteSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingsUpdateManyMutationInput, SiteSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings upsert
   */
  export type SiteSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteSettings to update in case it exists.
     */
    where: SiteSettingsWhereUniqueInput
    /**
     * In case the SiteSettings found by the `where` argument doesn't exist, create a new SiteSettings with this data.
     */
    create: XOR<SiteSettingsCreateInput, SiteSettingsUncheckedCreateInput>
    /**
     * In case the SiteSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingsUpdateInput, SiteSettingsUncheckedUpdateInput>
  }

  /**
   * SiteSettings delete
   */
  export type SiteSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
    /**
     * Filter which SiteSettings to delete.
     */
    where: SiteSettingsWhereUniqueInput
  }

  /**
   * SiteSettings deleteMany
   */
  export type SiteSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingsWhereInput
  }

  /**
   * SiteSettings findRaw
   */
  export type SiteSettingsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SiteSettings aggregateRaw
   */
  export type SiteSettingsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SiteSettings without action
   */
  export type SiteSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSettings
     */
    select?: SiteSettingsSelect<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    order: number | null
  }

  export type EventSumAggregateOutputType = {
    order: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    bannerImage: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    bannerImage: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    startDate: number
    endDate: number
    location: number
    bannerImage: number
    isActive: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    order?: true
  }

  export type EventSumAggregateInputType = {
    order?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    bannerImage?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    bannerImage?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    bannerImage?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string
    startDate: Date
    endDate: Date | null
    location: string | null
    bannerImage: string | null
    isActive: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    bannerImage?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Event$imagesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>


  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    bannerImage?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Event$imagesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      images: Prisma.$GalleryImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string
      startDate: Date
      endDate: Date | null
      location: string | null
      bannerImage: string | null
      isActive: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Event$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Event$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly bannerImage: FieldRef<"Event", 'String'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly order: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event.images
   */
  export type Event$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    cursor?: GalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageAvgAggregateOutputType = {
    order: number | null
  }

  export type GalleryImageSumAggregateOutputType = {
    order: number | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    imageUrl: string | null
    caption: string | null
    order: number | null
    createdAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    imageUrl: string | null
    caption: string | null
    order: number | null
    createdAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    eventId: number
    imageUrl: number
    caption: number
    order: number
    createdAt: number
    _all: number
  }


  export type GalleryImageAvgAggregateInputType = {
    order?: true
  }

  export type GalleryImageSumAggregateInputType = {
    order?: true
  }

  export type GalleryImageMinAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    caption?: true
    order?: true
    createdAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    caption?: true
    order?: true
    createdAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    caption?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _avg?: GalleryImageAvgAggregateInputType
    _sum?: GalleryImageSumAggregateInputType
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: string
    eventId: string
    imageUrl: string
    caption: string | null
    order: number
    createdAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    caption?: boolean
    order?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>


  export type GalleryImageSelectScalar = {
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    caption?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type GalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      imageUrl: string
      caption: string | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * @param {GalleryImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const galleryImage = await prisma.galleryImage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: GalleryImageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GalleryImage.
     * @param {GalleryImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const galleryImage = await prisma.galleryImage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GalleryImageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryImage model
   */ 
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'String'>
    readonly eventId: FieldRef<"GalleryImage", 'String'>
    readonly imageUrl: FieldRef<"GalleryImage", 'String'>
    readonly caption: FieldRef<"GalleryImage", 'String'>
    readonly order: FieldRef<"GalleryImage", 'Int'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
  }

  /**
   * GalleryImage findRaw
   */
  export type GalleryImageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GalleryImage aggregateRaw
   */
  export type GalleryImageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SurveyMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Survey$questionsArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>


  export type SurveySelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Survey$questionsArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {
      questions: Prisma.$SurveyQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }

  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyFindUniqueArgs>(args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Survey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyFindFirstArgs>(args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyFindManyArgs>(args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
     */
    create<T extends SurveyCreateArgs>(args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Surveys.
     * @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyCreateManyArgs>(args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
     */
    delete<T extends SurveyDeleteArgs>(args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyUpdateArgs>(args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyDeleteManyArgs>(args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyUpdateManyArgs>(args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
     */
    upsert<T extends SurveyUpsertArgs>(args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * @param {SurveyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const survey = await prisma.survey.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SurveyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Survey.
     * @param {SurveyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const survey = await prisma.survey.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SurveyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Survey$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Survey$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey model
   */ 
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'String'>
    readonly title: FieldRef<"Survey", 'String'>
    readonly slug: FieldRef<"Survey", 'String'>
    readonly description: FieldRef<"Survey", 'String'>
    readonly isActive: FieldRef<"Survey", 'Boolean'>
    readonly createdAt: FieldRef<"Survey", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }

  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
  }

  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }

  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
  }

  /**
   * Survey findRaw
   */
  export type SurveyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Survey aggregateRaw
   */
  export type SurveyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Survey.questions
   */
  export type Survey$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    where?: SurveyQuestionWhereInput
    orderBy?: SurveyQuestionOrderByWithRelationInput | SurveyQuestionOrderByWithRelationInput[]
    cursor?: SurveyQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyQuestionScalarFieldEnum | SurveyQuestionScalarFieldEnum[]
  }

  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
  }


  /**
   * Model SurveyQuestion
   */

  export type AggregateSurveyQuestion = {
    _count: SurveyQuestionCountAggregateOutputType | null
    _avg: SurveyQuestionAvgAggregateOutputType | null
    _sum: SurveyQuestionSumAggregateOutputType | null
    _min: SurveyQuestionMinAggregateOutputType | null
    _max: SurveyQuestionMaxAggregateOutputType | null
  }

  export type SurveyQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type SurveyQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type SurveyQuestionMinAggregateOutputType = {
    id: string | null
    surveyId: string | null
    order: number | null
    type: string | null
    label: string | null
    required: boolean | null
  }

  export type SurveyQuestionMaxAggregateOutputType = {
    id: string | null
    surveyId: string | null
    order: number | null
    type: string | null
    label: string | null
    required: boolean | null
  }

  export type SurveyQuestionCountAggregateOutputType = {
    id: number
    surveyId: number
    order: number
    type: number
    label: number
    options: number
    required: number
    _all: number
  }


  export type SurveyQuestionAvgAggregateInputType = {
    order?: true
  }

  export type SurveyQuestionSumAggregateInputType = {
    order?: true
  }

  export type SurveyQuestionMinAggregateInputType = {
    id?: true
    surveyId?: true
    order?: true
    type?: true
    label?: true
    required?: true
  }

  export type SurveyQuestionMaxAggregateInputType = {
    id?: true
    surveyId?: true
    order?: true
    type?: true
    label?: true
    required?: true
  }

  export type SurveyQuestionCountAggregateInputType = {
    id?: true
    surveyId?: true
    order?: true
    type?: true
    label?: true
    options?: true
    required?: true
    _all?: true
  }

  export type SurveyQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyQuestion to aggregate.
     */
    where?: SurveyQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyQuestions to fetch.
     */
    orderBy?: SurveyQuestionOrderByWithRelationInput | SurveyQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyQuestions
    **/
    _count?: true | SurveyQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveyQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyQuestionMaxAggregateInputType
  }

  export type GetSurveyQuestionAggregateType<T extends SurveyQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyQuestion[P]>
      : GetScalarType<T[P], AggregateSurveyQuestion[P]>
  }




  export type SurveyQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyQuestionWhereInput
    orderBy?: SurveyQuestionOrderByWithAggregationInput | SurveyQuestionOrderByWithAggregationInput[]
    by: SurveyQuestionScalarFieldEnum[] | SurveyQuestionScalarFieldEnum
    having?: SurveyQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyQuestionCountAggregateInputType | true
    _avg?: SurveyQuestionAvgAggregateInputType
    _sum?: SurveyQuestionSumAggregateInputType
    _min?: SurveyQuestionMinAggregateInputType
    _max?: SurveyQuestionMaxAggregateInputType
  }

  export type SurveyQuestionGroupByOutputType = {
    id: string
    surveyId: string
    order: number
    type: string
    label: string
    options: string[]
    required: boolean
    _count: SurveyQuestionCountAggregateOutputType | null
    _avg: SurveyQuestionAvgAggregateOutputType | null
    _sum: SurveyQuestionSumAggregateOutputType | null
    _min: SurveyQuestionMinAggregateOutputType | null
    _max: SurveyQuestionMaxAggregateOutputType | null
  }

  type GetSurveyQuestionGroupByPayload<T extends SurveyQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyQuestionGroupByOutputType[P]>
        }
      >
    >


  export type SurveyQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    options?: boolean
    required?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyQuestion"]>


  export type SurveyQuestionSelectScalar = {
    id?: boolean
    surveyId?: boolean
    order?: boolean
    type?: boolean
    label?: boolean
    options?: boolean
    required?: boolean
  }

  export type SurveyQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }

  export type $SurveyQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyQuestion"
    objects: {
      survey: Prisma.$SurveyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surveyId: string
      order: number
      type: string
      label: string
      options: string[]
      required: boolean
    }, ExtArgs["result"]["surveyQuestion"]>
    composites: {}
  }

  type SurveyQuestionGetPayload<S extends boolean | null | undefined | SurveyQuestionDefaultArgs> = $Result.GetResult<Prisma.$SurveyQuestionPayload, S>

  type SurveyQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyQuestionCountAggregateInputType | true
    }

  export interface SurveyQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyQuestion'], meta: { name: 'SurveyQuestion' } }
    /**
     * Find zero or one SurveyQuestion that matches the filter.
     * @param {SurveyQuestionFindUniqueArgs} args - Arguments to find a SurveyQuestion
     * @example
     * // Get one SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyQuestionFindUniqueArgs>(args: SelectSubset<T, SurveyQuestionFindUniqueArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SurveyQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyQuestionFindUniqueOrThrowArgs} args - Arguments to find a SurveyQuestion
     * @example
     * // Get one SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SurveyQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionFindFirstArgs} args - Arguments to find a SurveyQuestion
     * @example
     * // Get one SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyQuestionFindFirstArgs>(args?: SelectSubset<T, SurveyQuestionFindFirstArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SurveyQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionFindFirstOrThrowArgs} args - Arguments to find a SurveyQuestion
     * @example
     * // Get one SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SurveyQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyQuestions
     * const surveyQuestions = await prisma.surveyQuestion.findMany()
     * 
     * // Get first 10 SurveyQuestions
     * const surveyQuestions = await prisma.surveyQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyQuestionWithIdOnly = await prisma.surveyQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyQuestionFindManyArgs>(args?: SelectSubset<T, SurveyQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SurveyQuestion.
     * @param {SurveyQuestionCreateArgs} args - Arguments to create a SurveyQuestion.
     * @example
     * // Create one SurveyQuestion
     * const SurveyQuestion = await prisma.surveyQuestion.create({
     *   data: {
     *     // ... data to create a SurveyQuestion
     *   }
     * })
     * 
     */
    create<T extends SurveyQuestionCreateArgs>(args: SelectSubset<T, SurveyQuestionCreateArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SurveyQuestions.
     * @param {SurveyQuestionCreateManyArgs} args - Arguments to create many SurveyQuestions.
     * @example
     * // Create many SurveyQuestions
     * const surveyQuestion = await prisma.surveyQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyQuestionCreateManyArgs>(args?: SelectSubset<T, SurveyQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurveyQuestion.
     * @param {SurveyQuestionDeleteArgs} args - Arguments to delete one SurveyQuestion.
     * @example
     * // Delete one SurveyQuestion
     * const SurveyQuestion = await prisma.surveyQuestion.delete({
     *   where: {
     *     // ... filter to delete one SurveyQuestion
     *   }
     * })
     * 
     */
    delete<T extends SurveyQuestionDeleteArgs>(args: SelectSubset<T, SurveyQuestionDeleteArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SurveyQuestion.
     * @param {SurveyQuestionUpdateArgs} args - Arguments to update one SurveyQuestion.
     * @example
     * // Update one SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyQuestionUpdateArgs>(args: SelectSubset<T, SurveyQuestionUpdateArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SurveyQuestions.
     * @param {SurveyQuestionDeleteManyArgs} args - Arguments to filter SurveyQuestions to delete.
     * @example
     * // Delete a few SurveyQuestions
     * const { count } = await prisma.surveyQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyQuestionDeleteManyArgs>(args?: SelectSubset<T, SurveyQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyQuestions
     * const surveyQuestion = await prisma.surveyQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyQuestionUpdateManyArgs>(args: SelectSubset<T, SurveyQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveyQuestion.
     * @param {SurveyQuestionUpsertArgs} args - Arguments to update or create a SurveyQuestion.
     * @example
     * // Update or create a SurveyQuestion
     * const surveyQuestion = await prisma.surveyQuestion.upsert({
     *   create: {
     *     // ... data to create a SurveyQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyQuestion we want to update
     *   }
     * })
     */
    upsert<T extends SurveyQuestionUpsertArgs>(args: SelectSubset<T, SurveyQuestionUpsertArgs<ExtArgs>>): Prisma__SurveyQuestionClient<$Result.GetResult<Prisma.$SurveyQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more SurveyQuestions that matches the filter.
     * @param {SurveyQuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const surveyQuestion = await prisma.surveyQuestion.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SurveyQuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SurveyQuestion.
     * @param {SurveyQuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const surveyQuestion = await prisma.surveyQuestion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SurveyQuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SurveyQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionCountArgs} args - Arguments to filter SurveyQuestions to count.
     * @example
     * // Count the number of SurveyQuestions
     * const count = await prisma.surveyQuestion.count({
     *   where: {
     *     // ... the filter for the SurveyQuestions we want to count
     *   }
     * })
    **/
    count<T extends SurveyQuestionCountArgs>(
      args?: Subset<T, SurveyQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyQuestionAggregateArgs>(args: Subset<T, SurveyQuestionAggregateArgs>): Prisma.PrismaPromise<GetSurveyQuestionAggregateType<T>>

    /**
     * Group by SurveyQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyQuestionGroupByArgs['orderBy'] }
        : { orderBy?: SurveyQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyQuestion model
   */
  readonly fields: SurveyQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    survey<T extends SurveyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveyDefaultArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SurveyQuestion model
   */ 
  interface SurveyQuestionFieldRefs {
    readonly id: FieldRef<"SurveyQuestion", 'String'>
    readonly surveyId: FieldRef<"SurveyQuestion", 'String'>
    readonly order: FieldRef<"SurveyQuestion", 'Int'>
    readonly type: FieldRef<"SurveyQuestion", 'String'>
    readonly label: FieldRef<"SurveyQuestion", 'String'>
    readonly options: FieldRef<"SurveyQuestion", 'String[]'>
    readonly required: FieldRef<"SurveyQuestion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SurveyQuestion findUnique
   */
  export type SurveyQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SurveyQuestion to fetch.
     */
    where: SurveyQuestionWhereUniqueInput
  }

  /**
   * SurveyQuestion findUniqueOrThrow
   */
  export type SurveyQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SurveyQuestion to fetch.
     */
    where: SurveyQuestionWhereUniqueInput
  }

  /**
   * SurveyQuestion findFirst
   */
  export type SurveyQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SurveyQuestion to fetch.
     */
    where?: SurveyQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyQuestions to fetch.
     */
    orderBy?: SurveyQuestionOrderByWithRelationInput | SurveyQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyQuestions.
     */
    cursor?: SurveyQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyQuestions.
     */
    distinct?: SurveyQuestionScalarFieldEnum | SurveyQuestionScalarFieldEnum[]
  }

  /**
   * SurveyQuestion findFirstOrThrow
   */
  export type SurveyQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SurveyQuestion to fetch.
     */
    where?: SurveyQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyQuestions to fetch.
     */
    orderBy?: SurveyQuestionOrderByWithRelationInput | SurveyQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyQuestions.
     */
    cursor?: SurveyQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyQuestions.
     */
    distinct?: SurveyQuestionScalarFieldEnum | SurveyQuestionScalarFieldEnum[]
  }

  /**
   * SurveyQuestion findMany
   */
  export type SurveyQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SurveyQuestions to fetch.
     */
    where?: SurveyQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyQuestions to fetch.
     */
    orderBy?: SurveyQuestionOrderByWithRelationInput | SurveyQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyQuestions.
     */
    cursor?: SurveyQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyQuestions.
     */
    skip?: number
    distinct?: SurveyQuestionScalarFieldEnum | SurveyQuestionScalarFieldEnum[]
  }

  /**
   * SurveyQuestion create
   */
  export type SurveyQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyQuestion.
     */
    data: XOR<SurveyQuestionCreateInput, SurveyQuestionUncheckedCreateInput>
  }

  /**
   * SurveyQuestion createMany
   */
  export type SurveyQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyQuestions.
     */
    data: SurveyQuestionCreateManyInput | SurveyQuestionCreateManyInput[]
  }

  /**
   * SurveyQuestion update
   */
  export type SurveyQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyQuestion.
     */
    data: XOR<SurveyQuestionUpdateInput, SurveyQuestionUncheckedUpdateInput>
    /**
     * Choose, which SurveyQuestion to update.
     */
    where: SurveyQuestionWhereUniqueInput
  }

  /**
   * SurveyQuestion updateMany
   */
  export type SurveyQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyQuestions.
     */
    data: XOR<SurveyQuestionUpdateManyMutationInput, SurveyQuestionUncheckedUpdateManyInput>
    /**
     * Filter which SurveyQuestions to update
     */
    where?: SurveyQuestionWhereInput
  }

  /**
   * SurveyQuestion upsert
   */
  export type SurveyQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyQuestion to update in case it exists.
     */
    where: SurveyQuestionWhereUniqueInput
    /**
     * In case the SurveyQuestion found by the `where` argument doesn't exist, create a new SurveyQuestion with this data.
     */
    create: XOR<SurveyQuestionCreateInput, SurveyQuestionUncheckedCreateInput>
    /**
     * In case the SurveyQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyQuestionUpdateInput, SurveyQuestionUncheckedUpdateInput>
  }

  /**
   * SurveyQuestion delete
   */
  export type SurveyQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
    /**
     * Filter which SurveyQuestion to delete.
     */
    where: SurveyQuestionWhereUniqueInput
  }

  /**
   * SurveyQuestion deleteMany
   */
  export type SurveyQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyQuestions to delete
     */
    where?: SurveyQuestionWhereInput
  }

  /**
   * SurveyQuestion findRaw
   */
  export type SurveyQuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyQuestion aggregateRaw
   */
  export type SurveyQuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyQuestion without action
   */
  export type SurveyQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyQuestion
     */
    select?: SurveyQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyQuestionInclude<ExtArgs> | null
  }


  /**
   * Model SurveyResponse
   */

  export type AggregateSurveyResponse = {
    _count: SurveyResponseCountAggregateOutputType | null
    _min: SurveyResponseMinAggregateOutputType | null
    _max: SurveyResponseMaxAggregateOutputType | null
  }

  export type SurveyResponseMinAggregateOutputType = {
    id: string | null
    surveyId: string | null
    respondentName: string | null
    respondentEmail: string | null
    submittedAt: Date | null
  }

  export type SurveyResponseMaxAggregateOutputType = {
    id: string | null
    surveyId: string | null
    respondentName: string | null
    respondentEmail: string | null
    submittedAt: Date | null
  }

  export type SurveyResponseCountAggregateOutputType = {
    id: number
    surveyId: number
    respondentName: number
    respondentEmail: number
    submittedAt: number
    _all: number
  }


  export type SurveyResponseMinAggregateInputType = {
    id?: true
    surveyId?: true
    respondentName?: true
    respondentEmail?: true
    submittedAt?: true
  }

  export type SurveyResponseMaxAggregateInputType = {
    id?: true
    surveyId?: true
    respondentName?: true
    respondentEmail?: true
    submittedAt?: true
  }

  export type SurveyResponseCountAggregateInputType = {
    id?: true
    surveyId?: true
    respondentName?: true
    respondentEmail?: true
    submittedAt?: true
    _all?: true
  }

  export type SurveyResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyResponse to aggregate.
     */
    where?: SurveyResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponseOrderByWithRelationInput | SurveyResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyResponses
    **/
    _count?: true | SurveyResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyResponseMaxAggregateInputType
  }

  export type GetSurveyResponseAggregateType<T extends SurveyResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyResponse[P]>
      : GetScalarType<T[P], AggregateSurveyResponse[P]>
  }




  export type SurveyResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyResponseWhereInput
    orderBy?: SurveyResponseOrderByWithAggregationInput | SurveyResponseOrderByWithAggregationInput[]
    by: SurveyResponseScalarFieldEnum[] | SurveyResponseScalarFieldEnum
    having?: SurveyResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyResponseCountAggregateInputType | true
    _min?: SurveyResponseMinAggregateInputType
    _max?: SurveyResponseMaxAggregateInputType
  }

  export type SurveyResponseGroupByOutputType = {
    id: string
    surveyId: string
    respondentName: string | null
    respondentEmail: string | null
    submittedAt: Date
    _count: SurveyResponseCountAggregateOutputType | null
    _min: SurveyResponseMinAggregateOutputType | null
    _max: SurveyResponseMaxAggregateOutputType | null
  }

  type GetSurveyResponseGroupByPayload<T extends SurveyResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyResponseGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyResponseGroupByOutputType[P]>
        }
      >
    >


  export type SurveyResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyId?: boolean
    respondentName?: boolean
    respondentEmail?: boolean
    submittedAt?: boolean
    answers?: boolean | SurveyResponse$answersArgs<ExtArgs>
    _count?: boolean | SurveyResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyResponse"]>


  export type SurveyResponseSelectScalar = {
    id?: boolean
    surveyId?: boolean
    respondentName?: boolean
    respondentEmail?: boolean
    submittedAt?: boolean
  }

  export type SurveyResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | SurveyResponse$answersArgs<ExtArgs>
    _count?: boolean | SurveyResponseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SurveyResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyResponse"
    objects: {
      answers: Prisma.$SurveyAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surveyId: string
      respondentName: string | null
      respondentEmail: string | null
      submittedAt: Date
    }, ExtArgs["result"]["surveyResponse"]>
    composites: {}
  }

  type SurveyResponseGetPayload<S extends boolean | null | undefined | SurveyResponseDefaultArgs> = $Result.GetResult<Prisma.$SurveyResponsePayload, S>

  type SurveyResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyResponseCountAggregateInputType | true
    }

  export interface SurveyResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyResponse'], meta: { name: 'SurveyResponse' } }
    /**
     * Find zero or one SurveyResponse that matches the filter.
     * @param {SurveyResponseFindUniqueArgs} args - Arguments to find a SurveyResponse
     * @example
     * // Get one SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyResponseFindUniqueArgs>(args: SelectSubset<T, SurveyResponseFindUniqueArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SurveyResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyResponseFindUniqueOrThrowArgs} args - Arguments to find a SurveyResponse
     * @example
     * // Get one SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SurveyResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseFindFirstArgs} args - Arguments to find a SurveyResponse
     * @example
     * // Get one SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyResponseFindFirstArgs>(args?: SelectSubset<T, SurveyResponseFindFirstArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SurveyResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseFindFirstOrThrowArgs} args - Arguments to find a SurveyResponse
     * @example
     * // Get one SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SurveyResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyResponses
     * const surveyResponses = await prisma.surveyResponse.findMany()
     * 
     * // Get first 10 SurveyResponses
     * const surveyResponses = await prisma.surveyResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyResponseWithIdOnly = await prisma.surveyResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyResponseFindManyArgs>(args?: SelectSubset<T, SurveyResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SurveyResponse.
     * @param {SurveyResponseCreateArgs} args - Arguments to create a SurveyResponse.
     * @example
     * // Create one SurveyResponse
     * const SurveyResponse = await prisma.surveyResponse.create({
     *   data: {
     *     // ... data to create a SurveyResponse
     *   }
     * })
     * 
     */
    create<T extends SurveyResponseCreateArgs>(args: SelectSubset<T, SurveyResponseCreateArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SurveyResponses.
     * @param {SurveyResponseCreateManyArgs} args - Arguments to create many SurveyResponses.
     * @example
     * // Create many SurveyResponses
     * const surveyResponse = await prisma.surveyResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyResponseCreateManyArgs>(args?: SelectSubset<T, SurveyResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurveyResponse.
     * @param {SurveyResponseDeleteArgs} args - Arguments to delete one SurveyResponse.
     * @example
     * // Delete one SurveyResponse
     * const SurveyResponse = await prisma.surveyResponse.delete({
     *   where: {
     *     // ... filter to delete one SurveyResponse
     *   }
     * })
     * 
     */
    delete<T extends SurveyResponseDeleteArgs>(args: SelectSubset<T, SurveyResponseDeleteArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SurveyResponse.
     * @param {SurveyResponseUpdateArgs} args - Arguments to update one SurveyResponse.
     * @example
     * // Update one SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyResponseUpdateArgs>(args: SelectSubset<T, SurveyResponseUpdateArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SurveyResponses.
     * @param {SurveyResponseDeleteManyArgs} args - Arguments to filter SurveyResponses to delete.
     * @example
     * // Delete a few SurveyResponses
     * const { count } = await prisma.surveyResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyResponseDeleteManyArgs>(args?: SelectSubset<T, SurveyResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyResponses
     * const surveyResponse = await prisma.surveyResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyResponseUpdateManyArgs>(args: SelectSubset<T, SurveyResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveyResponse.
     * @param {SurveyResponseUpsertArgs} args - Arguments to update or create a SurveyResponse.
     * @example
     * // Update or create a SurveyResponse
     * const surveyResponse = await prisma.surveyResponse.upsert({
     *   create: {
     *     // ... data to create a SurveyResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyResponse we want to update
     *   }
     * })
     */
    upsert<T extends SurveyResponseUpsertArgs>(args: SelectSubset<T, SurveyResponseUpsertArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more SurveyResponses that matches the filter.
     * @param {SurveyResponseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const surveyResponse = await prisma.surveyResponse.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SurveyResponseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SurveyResponse.
     * @param {SurveyResponseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const surveyResponse = await prisma.surveyResponse.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SurveyResponseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseCountArgs} args - Arguments to filter SurveyResponses to count.
     * @example
     * // Count the number of SurveyResponses
     * const count = await prisma.surveyResponse.count({
     *   where: {
     *     // ... the filter for the SurveyResponses we want to count
     *   }
     * })
    **/
    count<T extends SurveyResponseCountArgs>(
      args?: Subset<T, SurveyResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyResponseAggregateArgs>(args: Subset<T, SurveyResponseAggregateArgs>): Prisma.PrismaPromise<GetSurveyResponseAggregateType<T>>

    /**
     * Group by SurveyResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyResponseGroupByArgs['orderBy'] }
        : { orderBy?: SurveyResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyResponse model
   */
  readonly fields: SurveyResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends SurveyResponse$answersArgs<ExtArgs> = {}>(args?: Subset<T, SurveyResponse$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SurveyResponse model
   */ 
  interface SurveyResponseFieldRefs {
    readonly id: FieldRef<"SurveyResponse", 'String'>
    readonly surveyId: FieldRef<"SurveyResponse", 'String'>
    readonly respondentName: FieldRef<"SurveyResponse", 'String'>
    readonly respondentEmail: FieldRef<"SurveyResponse", 'String'>
    readonly submittedAt: FieldRef<"SurveyResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SurveyResponse findUnique
   */
  export type SurveyResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponse to fetch.
     */
    where: SurveyResponseWhereUniqueInput
  }

  /**
   * SurveyResponse findUniqueOrThrow
   */
  export type SurveyResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponse to fetch.
     */
    where: SurveyResponseWhereUniqueInput
  }

  /**
   * SurveyResponse findFirst
   */
  export type SurveyResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponse to fetch.
     */
    where?: SurveyResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponseOrderByWithRelationInput | SurveyResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyResponses.
     */
    cursor?: SurveyResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyResponses.
     */
    distinct?: SurveyResponseScalarFieldEnum | SurveyResponseScalarFieldEnum[]
  }

  /**
   * SurveyResponse findFirstOrThrow
   */
  export type SurveyResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponse to fetch.
     */
    where?: SurveyResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponseOrderByWithRelationInput | SurveyResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyResponses.
     */
    cursor?: SurveyResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyResponses.
     */
    distinct?: SurveyResponseScalarFieldEnum | SurveyResponseScalarFieldEnum[]
  }

  /**
   * SurveyResponse findMany
   */
  export type SurveyResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where?: SurveyResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponseOrderByWithRelationInput | SurveyResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyResponses.
     */
    cursor?: SurveyResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    distinct?: SurveyResponseScalarFieldEnum | SurveyResponseScalarFieldEnum[]
  }

  /**
   * SurveyResponse create
   */
  export type SurveyResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyResponse.
     */
    data: XOR<SurveyResponseCreateInput, SurveyResponseUncheckedCreateInput>
  }

  /**
   * SurveyResponse createMany
   */
  export type SurveyResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyResponses.
     */
    data: SurveyResponseCreateManyInput | SurveyResponseCreateManyInput[]
  }

  /**
   * SurveyResponse update
   */
  export type SurveyResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyResponse.
     */
    data: XOR<SurveyResponseUpdateInput, SurveyResponseUncheckedUpdateInput>
    /**
     * Choose, which SurveyResponse to update.
     */
    where: SurveyResponseWhereUniqueInput
  }

  /**
   * SurveyResponse updateMany
   */
  export type SurveyResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyResponses.
     */
    data: XOR<SurveyResponseUpdateManyMutationInput, SurveyResponseUncheckedUpdateManyInput>
    /**
     * Filter which SurveyResponses to update
     */
    where?: SurveyResponseWhereInput
  }

  /**
   * SurveyResponse upsert
   */
  export type SurveyResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyResponse to update in case it exists.
     */
    where: SurveyResponseWhereUniqueInput
    /**
     * In case the SurveyResponse found by the `where` argument doesn't exist, create a new SurveyResponse with this data.
     */
    create: XOR<SurveyResponseCreateInput, SurveyResponseUncheckedCreateInput>
    /**
     * In case the SurveyResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyResponseUpdateInput, SurveyResponseUncheckedUpdateInput>
  }

  /**
   * SurveyResponse delete
   */
  export type SurveyResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
    /**
     * Filter which SurveyResponse to delete.
     */
    where: SurveyResponseWhereUniqueInput
  }

  /**
   * SurveyResponse deleteMany
   */
  export type SurveyResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyResponses to delete
     */
    where?: SurveyResponseWhereInput
  }

  /**
   * SurveyResponse findRaw
   */
  export type SurveyResponseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyResponse aggregateRaw
   */
  export type SurveyResponseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyResponse.answers
   */
  export type SurveyResponse$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    where?: SurveyAnswerWhereInput
    orderBy?: SurveyAnswerOrderByWithRelationInput | SurveyAnswerOrderByWithRelationInput[]
    cursor?: SurveyAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyAnswerScalarFieldEnum | SurveyAnswerScalarFieldEnum[]
  }

  /**
   * SurveyResponse without action
   */
  export type SurveyResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponseInclude<ExtArgs> | null
  }


  /**
   * Model SurveyAnswer
   */

  export type AggregateSurveyAnswer = {
    _count: SurveyAnswerCountAggregateOutputType | null
    _min: SurveyAnswerMinAggregateOutputType | null
    _max: SurveyAnswerMaxAggregateOutputType | null
  }

  export type SurveyAnswerMinAggregateOutputType = {
    id: string | null
    responseId: string | null
    questionId: string | null
    value: string | null
  }

  export type SurveyAnswerMaxAggregateOutputType = {
    id: string | null
    responseId: string | null
    questionId: string | null
    value: string | null
  }

  export type SurveyAnswerCountAggregateOutputType = {
    id: number
    responseId: number
    questionId: number
    value: number
    _all: number
  }


  export type SurveyAnswerMinAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    value?: true
  }

  export type SurveyAnswerMaxAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    value?: true
  }

  export type SurveyAnswerCountAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    value?: true
    _all?: true
  }

  export type SurveyAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyAnswer to aggregate.
     */
    where?: SurveyAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAnswers to fetch.
     */
    orderBy?: SurveyAnswerOrderByWithRelationInput | SurveyAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyAnswers
    **/
    _count?: true | SurveyAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyAnswerMaxAggregateInputType
  }

  export type GetSurveyAnswerAggregateType<T extends SurveyAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyAnswer[P]>
      : GetScalarType<T[P], AggregateSurveyAnswer[P]>
  }




  export type SurveyAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyAnswerWhereInput
    orderBy?: SurveyAnswerOrderByWithAggregationInput | SurveyAnswerOrderByWithAggregationInput[]
    by: SurveyAnswerScalarFieldEnum[] | SurveyAnswerScalarFieldEnum
    having?: SurveyAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyAnswerCountAggregateInputType | true
    _min?: SurveyAnswerMinAggregateInputType
    _max?: SurveyAnswerMaxAggregateInputType
  }

  export type SurveyAnswerGroupByOutputType = {
    id: string
    responseId: string
    questionId: string
    value: string
    _count: SurveyAnswerCountAggregateOutputType | null
    _min: SurveyAnswerMinAggregateOutputType | null
    _max: SurveyAnswerMaxAggregateOutputType | null
  }

  type GetSurveyAnswerGroupByPayload<T extends SurveyAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyAnswerGroupByOutputType[P]>
        }
      >
    >


  export type SurveyAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    value?: boolean
    response?: boolean | SurveyResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyAnswer"]>


  export type SurveyAnswerSelectScalar = {
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    value?: boolean
  }

  export type SurveyAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | SurveyResponseDefaultArgs<ExtArgs>
  }

  export type $SurveyAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyAnswer"
    objects: {
      response: Prisma.$SurveyResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responseId: string
      questionId: string
      value: string
    }, ExtArgs["result"]["surveyAnswer"]>
    composites: {}
  }

  type SurveyAnswerGetPayload<S extends boolean | null | undefined | SurveyAnswerDefaultArgs> = $Result.GetResult<Prisma.$SurveyAnswerPayload, S>

  type SurveyAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurveyAnswerCountAggregateInputType | true
    }

  export interface SurveyAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyAnswer'], meta: { name: 'SurveyAnswer' } }
    /**
     * Find zero or one SurveyAnswer that matches the filter.
     * @param {SurveyAnswerFindUniqueArgs} args - Arguments to find a SurveyAnswer
     * @example
     * // Get one SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyAnswerFindUniqueArgs>(args: SelectSubset<T, SurveyAnswerFindUniqueArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SurveyAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SurveyAnswerFindUniqueOrThrowArgs} args - Arguments to find a SurveyAnswer
     * @example
     * // Get one SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SurveyAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerFindFirstArgs} args - Arguments to find a SurveyAnswer
     * @example
     * // Get one SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyAnswerFindFirstArgs>(args?: SelectSubset<T, SurveyAnswerFindFirstArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SurveyAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerFindFirstOrThrowArgs} args - Arguments to find a SurveyAnswer
     * @example
     * // Get one SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SurveyAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyAnswers
     * const surveyAnswers = await prisma.surveyAnswer.findMany()
     * 
     * // Get first 10 SurveyAnswers
     * const surveyAnswers = await prisma.surveyAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyAnswerWithIdOnly = await prisma.surveyAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyAnswerFindManyArgs>(args?: SelectSubset<T, SurveyAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SurveyAnswer.
     * @param {SurveyAnswerCreateArgs} args - Arguments to create a SurveyAnswer.
     * @example
     * // Create one SurveyAnswer
     * const SurveyAnswer = await prisma.surveyAnswer.create({
     *   data: {
     *     // ... data to create a SurveyAnswer
     *   }
     * })
     * 
     */
    create<T extends SurveyAnswerCreateArgs>(args: SelectSubset<T, SurveyAnswerCreateArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SurveyAnswers.
     * @param {SurveyAnswerCreateManyArgs} args - Arguments to create many SurveyAnswers.
     * @example
     * // Create many SurveyAnswers
     * const surveyAnswer = await prisma.surveyAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyAnswerCreateManyArgs>(args?: SelectSubset<T, SurveyAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurveyAnswer.
     * @param {SurveyAnswerDeleteArgs} args - Arguments to delete one SurveyAnswer.
     * @example
     * // Delete one SurveyAnswer
     * const SurveyAnswer = await prisma.surveyAnswer.delete({
     *   where: {
     *     // ... filter to delete one SurveyAnswer
     *   }
     * })
     * 
     */
    delete<T extends SurveyAnswerDeleteArgs>(args: SelectSubset<T, SurveyAnswerDeleteArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SurveyAnswer.
     * @param {SurveyAnswerUpdateArgs} args - Arguments to update one SurveyAnswer.
     * @example
     * // Update one SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyAnswerUpdateArgs>(args: SelectSubset<T, SurveyAnswerUpdateArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SurveyAnswers.
     * @param {SurveyAnswerDeleteManyArgs} args - Arguments to filter SurveyAnswers to delete.
     * @example
     * // Delete a few SurveyAnswers
     * const { count } = await prisma.surveyAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyAnswerDeleteManyArgs>(args?: SelectSubset<T, SurveyAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyAnswers
     * const surveyAnswer = await prisma.surveyAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyAnswerUpdateManyArgs>(args: SelectSubset<T, SurveyAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurveyAnswer.
     * @param {SurveyAnswerUpsertArgs} args - Arguments to update or create a SurveyAnswer.
     * @example
     * // Update or create a SurveyAnswer
     * const surveyAnswer = await prisma.surveyAnswer.upsert({
     *   create: {
     *     // ... data to create a SurveyAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyAnswer we want to update
     *   }
     * })
     */
    upsert<T extends SurveyAnswerUpsertArgs>(args: SelectSubset<T, SurveyAnswerUpsertArgs<ExtArgs>>): Prisma__SurveyAnswerClient<$Result.GetResult<Prisma.$SurveyAnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more SurveyAnswers that matches the filter.
     * @param {SurveyAnswerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const surveyAnswer = await prisma.surveyAnswer.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: SurveyAnswerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SurveyAnswer.
     * @param {SurveyAnswerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const surveyAnswer = await prisma.surveyAnswer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SurveyAnswerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SurveyAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerCountArgs} args - Arguments to filter SurveyAnswers to count.
     * @example
     * // Count the number of SurveyAnswers
     * const count = await prisma.surveyAnswer.count({
     *   where: {
     *     // ... the filter for the SurveyAnswers we want to count
     *   }
     * })
    **/
    count<T extends SurveyAnswerCountArgs>(
      args?: Subset<T, SurveyAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAnswerAggregateArgs>(args: Subset<T, SurveyAnswerAggregateArgs>): Prisma.PrismaPromise<GetSurveyAnswerAggregateType<T>>

    /**
     * Group by SurveyAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyAnswerGroupByArgs['orderBy'] }
        : { orderBy?: SurveyAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyAnswer model
   */
  readonly fields: SurveyAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    response<T extends SurveyResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveyResponseDefaultArgs<ExtArgs>>): Prisma__SurveyResponseClient<$Result.GetResult<Prisma.$SurveyResponsePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SurveyAnswer model
   */ 
  interface SurveyAnswerFieldRefs {
    readonly id: FieldRef<"SurveyAnswer", 'String'>
    readonly responseId: FieldRef<"SurveyAnswer", 'String'>
    readonly questionId: FieldRef<"SurveyAnswer", 'String'>
    readonly value: FieldRef<"SurveyAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SurveyAnswer findUnique
   */
  export type SurveyAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SurveyAnswer to fetch.
     */
    where: SurveyAnswerWhereUniqueInput
  }

  /**
   * SurveyAnswer findUniqueOrThrow
   */
  export type SurveyAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SurveyAnswer to fetch.
     */
    where: SurveyAnswerWhereUniqueInput
  }

  /**
   * SurveyAnswer findFirst
   */
  export type SurveyAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SurveyAnswer to fetch.
     */
    where?: SurveyAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAnswers to fetch.
     */
    orderBy?: SurveyAnswerOrderByWithRelationInput | SurveyAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyAnswers.
     */
    cursor?: SurveyAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyAnswers.
     */
    distinct?: SurveyAnswerScalarFieldEnum | SurveyAnswerScalarFieldEnum[]
  }

  /**
   * SurveyAnswer findFirstOrThrow
   */
  export type SurveyAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SurveyAnswer to fetch.
     */
    where?: SurveyAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAnswers to fetch.
     */
    orderBy?: SurveyAnswerOrderByWithRelationInput | SurveyAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyAnswers.
     */
    cursor?: SurveyAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyAnswers.
     */
    distinct?: SurveyAnswerScalarFieldEnum | SurveyAnswerScalarFieldEnum[]
  }

  /**
   * SurveyAnswer findMany
   */
  export type SurveyAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter, which SurveyAnswers to fetch.
     */
    where?: SurveyAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyAnswers to fetch.
     */
    orderBy?: SurveyAnswerOrderByWithRelationInput | SurveyAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyAnswers.
     */
    cursor?: SurveyAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyAnswers.
     */
    skip?: number
    distinct?: SurveyAnswerScalarFieldEnum | SurveyAnswerScalarFieldEnum[]
  }

  /**
   * SurveyAnswer create
   */
  export type SurveyAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyAnswer.
     */
    data: XOR<SurveyAnswerCreateInput, SurveyAnswerUncheckedCreateInput>
  }

  /**
   * SurveyAnswer createMany
   */
  export type SurveyAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyAnswers.
     */
    data: SurveyAnswerCreateManyInput | SurveyAnswerCreateManyInput[]
  }

  /**
   * SurveyAnswer update
   */
  export type SurveyAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyAnswer.
     */
    data: XOR<SurveyAnswerUpdateInput, SurveyAnswerUncheckedUpdateInput>
    /**
     * Choose, which SurveyAnswer to update.
     */
    where: SurveyAnswerWhereUniqueInput
  }

  /**
   * SurveyAnswer updateMany
   */
  export type SurveyAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyAnswers.
     */
    data: XOR<SurveyAnswerUpdateManyMutationInput, SurveyAnswerUncheckedUpdateManyInput>
    /**
     * Filter which SurveyAnswers to update
     */
    where?: SurveyAnswerWhereInput
  }

  /**
   * SurveyAnswer upsert
   */
  export type SurveyAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyAnswer to update in case it exists.
     */
    where: SurveyAnswerWhereUniqueInput
    /**
     * In case the SurveyAnswer found by the `where` argument doesn't exist, create a new SurveyAnswer with this data.
     */
    create: XOR<SurveyAnswerCreateInput, SurveyAnswerUncheckedCreateInput>
    /**
     * In case the SurveyAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyAnswerUpdateInput, SurveyAnswerUncheckedUpdateInput>
  }

  /**
   * SurveyAnswer delete
   */
  export type SurveyAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
    /**
     * Filter which SurveyAnswer to delete.
     */
    where: SurveyAnswerWhereUniqueInput
  }

  /**
   * SurveyAnswer deleteMany
   */
  export type SurveyAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyAnswers to delete
     */
    where?: SurveyAnswerWhereInput
  }

  /**
   * SurveyAnswer findRaw
   */
  export type SurveyAnswerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyAnswer aggregateRaw
   */
  export type SurveyAnswerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SurveyAnswer without action
   */
  export type SurveyAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyAnswer
     */
    select?: SurveyAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyAnswerInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    authorName: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    authorName: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    tags: number
    authorName: number
    status: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    authorName?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    authorName?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    tags?: true
    authorName?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    coverImage: string | null
    tags: string[]
    authorName: string | null
    status: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    authorName?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>


  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    authorName?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      coverImage: string | null
      tags: string[]
      authorName: string | null
      status: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * @param {BlogPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blogPost = await prisma.blogPost.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: BlogPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BlogPost.
     * @param {BlogPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blogPost = await prisma.blogPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BlogPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */ 
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly tags: FieldRef<"BlogPost", 'String[]'>
    readonly authorName: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
  }

  /**
   * BlogPost findRaw
   */
  export type BlogPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BlogPost aggregateRaw
   */
  export type BlogPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CarouselSlideScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    image: 'image',
    ctaText: 'ctaText',
    ctaLink: 'ctaLink',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarouselSlideScalarFieldEnum = (typeof CarouselSlideScalarFieldEnum)[keyof typeof CarouselSlideScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    shortDescription: 'shortDescription',
    description: 'description',
    durationMinutes: 'durationMinutes',
    priceLabel: 'priceLabel',
    modes: 'modes',
    image: 'image',
    icon: 'icon',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    address: 'address',
    phone: 'phone',
    email: 'email',
    workingHours: 'workingHours',
    mapEmbedUrl: 'mapEmbedUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    source: 'source',
    status: 'status',
    adminNotes: 'adminNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    author: 'author',
    content: 'content',
    rating: 'rating',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    date: 'date',
    time: 'time',
    service: 'service',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    backgroundImage: 'backgroundImage',
    ctaText: 'ctaText',
    ctaLink: 'ctaLink',
    textColor: 'textColor',
    overlayOpacity: 'overlayOpacity',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const AboutSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    content: 'content',
    image: 'image',
    layout: 'layout',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutSectionScalarFieldEnum = (typeof AboutSectionScalarFieldEnum)[keyof typeof AboutSectionScalarFieldEnum]


  export const LegalPageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegalPageScalarFieldEnum = (typeof LegalPageScalarFieldEnum)[keyof typeof LegalPageScalarFieldEnum]


  export const TherapistProfileScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    title: 'title',
    photo: 'photo',
    shortBio: 'shortBio',
    qualifications: 'qualifications',
    specialisations: 'specialisations',
    languages: 'languages',
    approach: 'approach',
    yearsExperience: 'yearsExperience',
    registrationNo: 'registrationNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapistProfileScalarFieldEnum = (typeof TherapistProfileScalarFieldEnum)[keyof typeof TherapistProfileScalarFieldEnum]


  export const SiteSettingsScalarFieldEnum: {
    id: 'id',
    siteName: 'siteName',
    tagline: 'tagline',
    metaDescription: 'metaDescription',
    ogImage: 'ogImage',
    crisisNotice: 'crisisNotice',
    cookieConsentEnabled: 'cookieConsentEnabled',
    themePreset: 'themePreset',
    fontPair: 'fontPair',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingsScalarFieldEnum = (typeof SiteSettingsScalarFieldEnum)[keyof typeof SiteSettingsScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    location: 'location',
    bannerImage: 'bannerImage',
    isActive: 'isActive',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    imageUrl: 'imageUrl',
    caption: 'caption',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const SurveyQuestionScalarFieldEnum: {
    id: 'id',
    surveyId: 'surveyId',
    order: 'order',
    type: 'type',
    label: 'label',
    options: 'options',
    required: 'required'
  };

  export type SurveyQuestionScalarFieldEnum = (typeof SurveyQuestionScalarFieldEnum)[keyof typeof SurveyQuestionScalarFieldEnum]


  export const SurveyResponseScalarFieldEnum: {
    id: 'id',
    surveyId: 'surveyId',
    respondentName: 'respondentName',
    respondentEmail: 'respondentEmail',
    submittedAt: 'submittedAt'
  };

  export type SurveyResponseScalarFieldEnum = (typeof SurveyResponseScalarFieldEnum)[keyof typeof SurveyResponseScalarFieldEnum]


  export const SurveyAnswerScalarFieldEnum: {
    id: 'id',
    responseId: 'responseId',
    questionId: 'questionId',
    value: 'value'
  };

  export type SurveyAnswerScalarFieldEnum = (typeof SurveyAnswerScalarFieldEnum)[keyof typeof SurveyAnswerScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    tags: 'tags',
    authorName: 'authorName',
    status: 'status',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CarouselSlideWhereInput = {
    AND?: CarouselSlideWhereInput | CarouselSlideWhereInput[]
    OR?: CarouselSlideWhereInput[]
    NOT?: CarouselSlideWhereInput | CarouselSlideWhereInput[]
    id?: StringFilter<"CarouselSlide"> | string
    title?: StringFilter<"CarouselSlide"> | string
    subtitle?: StringFilter<"CarouselSlide"> | string
    description?: StringFilter<"CarouselSlide"> | string
    image?: StringFilter<"CarouselSlide"> | string
    ctaText?: StringFilter<"CarouselSlide"> | string
    ctaLink?: StringNullableFilter<"CarouselSlide"> | string | null
    order?: IntFilter<"CarouselSlide"> | number
    isActive?: BoolFilter<"CarouselSlide"> | boolean
    createdAt?: DateTimeFilter<"CarouselSlide"> | Date | string
    updatedAt?: DateTimeFilter<"CarouselSlide"> | Date | string
  }

  export type CarouselSlideOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarouselSlideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarouselSlideWhereInput | CarouselSlideWhereInput[]
    OR?: CarouselSlideWhereInput[]
    NOT?: CarouselSlideWhereInput | CarouselSlideWhereInput[]
    title?: StringFilter<"CarouselSlide"> | string
    subtitle?: StringFilter<"CarouselSlide"> | string
    description?: StringFilter<"CarouselSlide"> | string
    image?: StringFilter<"CarouselSlide"> | string
    ctaText?: StringFilter<"CarouselSlide"> | string
    ctaLink?: StringNullableFilter<"CarouselSlide"> | string | null
    order?: IntFilter<"CarouselSlide"> | number
    isActive?: BoolFilter<"CarouselSlide"> | boolean
    createdAt?: DateTimeFilter<"CarouselSlide"> | Date | string
    updatedAt?: DateTimeFilter<"CarouselSlide"> | Date | string
  }, "id">

  export type CarouselSlideOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarouselSlideCountOrderByAggregateInput
    _avg?: CarouselSlideAvgOrderByAggregateInput
    _max?: CarouselSlideMaxOrderByAggregateInput
    _min?: CarouselSlideMinOrderByAggregateInput
    _sum?: CarouselSlideSumOrderByAggregateInput
  }

  export type CarouselSlideScalarWhereWithAggregatesInput = {
    AND?: CarouselSlideScalarWhereWithAggregatesInput | CarouselSlideScalarWhereWithAggregatesInput[]
    OR?: CarouselSlideScalarWhereWithAggregatesInput[]
    NOT?: CarouselSlideScalarWhereWithAggregatesInput | CarouselSlideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarouselSlide"> | string
    title?: StringWithAggregatesFilter<"CarouselSlide"> | string
    subtitle?: StringWithAggregatesFilter<"CarouselSlide"> | string
    description?: StringWithAggregatesFilter<"CarouselSlide"> | string
    image?: StringWithAggregatesFilter<"CarouselSlide"> | string
    ctaText?: StringWithAggregatesFilter<"CarouselSlide"> | string
    ctaLink?: StringNullableWithAggregatesFilter<"CarouselSlide"> | string | null
    order?: IntWithAggregatesFilter<"CarouselSlide"> | number
    isActive?: BoolWithAggregatesFilter<"CarouselSlide"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CarouselSlide"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CarouselSlide"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    shortDescription?: StringNullableFilter<"Service"> | string | null
    description?: StringFilter<"Service"> | string
    durationMinutes?: IntNullableFilter<"Service"> | number | null
    priceLabel?: StringNullableFilter<"Service"> | string | null
    modes?: StringNullableListFilter<"Service">
    image?: StringNullableFilter<"Service"> | string | null
    icon?: StringNullableFilter<"Service"> | string | null
    order?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    priceLabel?: SortOrder
    modes?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    shortDescription?: StringNullableFilter<"Service"> | string | null
    description?: StringFilter<"Service"> | string
    durationMinutes?: IntNullableFilter<"Service"> | number | null
    priceLabel?: StringNullableFilter<"Service"> | string | null
    modes?: StringNullableListFilter<"Service">
    image?: StringNullableFilter<"Service"> | string | null
    icon?: StringNullableFilter<"Service"> | string | null
    order?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }, "id" | "slug">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    priceLabel?: SortOrder
    modes?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    slug?: StringWithAggregatesFilter<"Service"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"Service"> | string | null
    description?: StringWithAggregatesFilter<"Service"> | string
    durationMinutes?: IntNullableWithAggregatesFilter<"Service"> | number | null
    priceLabel?: StringNullableWithAggregatesFilter<"Service"> | string | null
    modes?: StringNullableListFilter<"Service">
    image?: StringNullableWithAggregatesFilter<"Service"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Service"> | string | null
    order?: IntWithAggregatesFilter<"Service"> | number
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    address?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    workingHours?: StringNullableFilter<"ContactInfo"> | string | null
    mapEmbedUrl?: StringNullableFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    workingHours?: SortOrder
    mapEmbedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    address?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    workingHours?: StringNullableFilter<"ContactInfo"> | string | null
    mapEmbedUrl?: StringNullableFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    workingHours?: SortOrder
    mapEmbedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    address?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    workingHours?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    mapEmbedUrl?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: StringFilter<"Enquiry"> | string
    name?: StringFilter<"Enquiry"> | string
    email?: StringFilter<"Enquiry"> | string
    phone?: StringNullableFilter<"Enquiry"> | string | null
    subject?: StringFilter<"Enquiry"> | string
    message?: StringFilter<"Enquiry"> | string
    source?: StringFilter<"Enquiry"> | string
    status?: StringFilter<"Enquiry"> | string
    adminNotes?: StringNullableFilter<"Enquiry"> | string | null
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    name?: StringFilter<"Enquiry"> | string
    email?: StringFilter<"Enquiry"> | string
    phone?: StringNullableFilter<"Enquiry"> | string | null
    subject?: StringFilter<"Enquiry"> | string
    message?: StringFilter<"Enquiry"> | string
    source?: StringFilter<"Enquiry"> | string
    status?: StringFilter<"Enquiry"> | string
    adminNotes?: StringNullableFilter<"Enquiry"> | string | null
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Enquiry"> | Date | string
  }, "id">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enquiry"> | string
    name?: StringWithAggregatesFilter<"Enquiry"> | string
    email?: StringWithAggregatesFilter<"Enquiry"> | string
    phone?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    subject?: StringWithAggregatesFilter<"Enquiry"> | string
    message?: StringWithAggregatesFilter<"Enquiry"> | string
    source?: StringWithAggregatesFilter<"Enquiry"> | string
    status?: StringWithAggregatesFilter<"Enquiry"> | string
    adminNotes?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    author?: StringFilter<"Review"> | string
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    author?: StringFilter<"Review"> | string
    content?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    isApproved?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    author?: StringWithAggregatesFilter<"Review"> | string
    content?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    isApproved?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    name?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringFilter<"Appointment"> | string
    service?: StringFilter<"Appointment"> | string
    message?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    time?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    name?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringFilter<"Appointment"> | string
    service?: StringFilter<"Appointment"> | string
    message?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    time?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    name?: StringWithAggregatesFilter<"Appointment"> | string
    email?: StringWithAggregatesFilter<"Appointment"> | string
    phone?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    time?: StringWithAggregatesFilter<"Appointment"> | string
    service?: StringWithAggregatesFilter<"Appointment"> | string
    message?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: StringWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    subtitle?: StringNullableFilter<"Content"> | string | null
    description?: StringFilter<"Content"> | string
    backgroundImage?: StringFilter<"Content"> | string
    ctaText?: StringNullableFilter<"Content"> | string | null
    ctaLink?: StringNullableFilter<"Content"> | string | null
    textColor?: StringFilter<"Content"> | string
    overlayOpacity?: FloatFilter<"Content"> | number
    order?: IntFilter<"Content"> | number
    isActive?: BoolFilter<"Content"> | boolean
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    backgroundImage?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    textColor?: SortOrder
    overlayOpacity?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    subtitle?: StringNullableFilter<"Content"> | string | null
    description?: StringFilter<"Content"> | string
    backgroundImage?: StringFilter<"Content"> | string
    ctaText?: StringNullableFilter<"Content"> | string | null
    ctaLink?: StringNullableFilter<"Content"> | string | null
    textColor?: StringFilter<"Content"> | string
    overlayOpacity?: FloatFilter<"Content"> | number
    order?: IntFilter<"Content"> | number
    isActive?: BoolFilter<"Content"> | boolean
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    backgroundImage?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    textColor?: SortOrder
    overlayOpacity?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Content"> | string | null
    description?: StringWithAggregatesFilter<"Content"> | string
    backgroundImage?: StringWithAggregatesFilter<"Content"> | string
    ctaText?: StringNullableWithAggregatesFilter<"Content"> | string | null
    ctaLink?: StringNullableWithAggregatesFilter<"Content"> | string | null
    textColor?: StringWithAggregatesFilter<"Content"> | string
    overlayOpacity?: FloatWithAggregatesFilter<"Content"> | number
    order?: IntWithAggregatesFilter<"Content"> | number
    isActive?: BoolWithAggregatesFilter<"Content"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type AboutSectionWhereInput = {
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    id?: StringFilter<"AboutSection"> | string
    title?: StringFilter<"AboutSection"> | string
    subtitle?: StringNullableFilter<"AboutSection"> | string | null
    content?: StringFilter<"AboutSection"> | string
    image?: StringFilter<"AboutSection"> | string
    layout?: StringFilter<"AboutSection"> | string
    order?: IntFilter<"AboutSection"> | number
    isActive?: BoolFilter<"AboutSection"> | boolean
    createdAt?: DateTimeFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"AboutSection"> | Date | string
  }

  export type AboutSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    image?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    title?: StringFilter<"AboutSection"> | string
    subtitle?: StringNullableFilter<"AboutSection"> | string | null
    content?: StringFilter<"AboutSection"> | string
    image?: StringFilter<"AboutSection"> | string
    layout?: StringFilter<"AboutSection"> | string
    order?: IntFilter<"AboutSection"> | number
    isActive?: BoolFilter<"AboutSection"> | boolean
    createdAt?: DateTimeFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeFilter<"AboutSection"> | Date | string
  }, "id">

  export type AboutSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    image?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutSectionCountOrderByAggregateInput
    _avg?: AboutSectionAvgOrderByAggregateInput
    _max?: AboutSectionMaxOrderByAggregateInput
    _min?: AboutSectionMinOrderByAggregateInput
    _sum?: AboutSectionSumOrderByAggregateInput
  }

  export type AboutSectionScalarWhereWithAggregatesInput = {
    AND?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    OR?: AboutSectionScalarWhereWithAggregatesInput[]
    NOT?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutSection"> | string
    title?: StringWithAggregatesFilter<"AboutSection"> | string
    subtitle?: StringNullableWithAggregatesFilter<"AboutSection"> | string | null
    content?: StringWithAggregatesFilter<"AboutSection"> | string
    image?: StringWithAggregatesFilter<"AboutSection"> | string
    layout?: StringWithAggregatesFilter<"AboutSection"> | string
    order?: IntWithAggregatesFilter<"AboutSection"> | number
    isActive?: BoolWithAggregatesFilter<"AboutSection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AboutSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutSection"> | Date | string
  }

  export type LegalPageWhereInput = {
    AND?: LegalPageWhereInput | LegalPageWhereInput[]
    OR?: LegalPageWhereInput[]
    NOT?: LegalPageWhereInput | LegalPageWhereInput[]
    id?: StringFilter<"LegalPage"> | string
    slug?: StringFilter<"LegalPage"> | string
    title?: StringFilter<"LegalPage"> | string
    content?: StringFilter<"LegalPage"> | string
    createdAt?: DateTimeFilter<"LegalPage"> | Date | string
    updatedAt?: DateTimeFilter<"LegalPage"> | Date | string
  }

  export type LegalPageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: LegalPageWhereInput | LegalPageWhereInput[]
    OR?: LegalPageWhereInput[]
    NOT?: LegalPageWhereInput | LegalPageWhereInput[]
    title?: StringFilter<"LegalPage"> | string
    content?: StringFilter<"LegalPage"> | string
    createdAt?: DateTimeFilter<"LegalPage"> | Date | string
    updatedAt?: DateTimeFilter<"LegalPage"> | Date | string
  }, "id" | "slug">

  export type LegalPageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegalPageCountOrderByAggregateInput
    _max?: LegalPageMaxOrderByAggregateInput
    _min?: LegalPageMinOrderByAggregateInput
  }

  export type LegalPageScalarWhereWithAggregatesInput = {
    AND?: LegalPageScalarWhereWithAggregatesInput | LegalPageScalarWhereWithAggregatesInput[]
    OR?: LegalPageScalarWhereWithAggregatesInput[]
    NOT?: LegalPageScalarWhereWithAggregatesInput | LegalPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegalPage"> | string
    slug?: StringWithAggregatesFilter<"LegalPage"> | string
    title?: StringWithAggregatesFilter<"LegalPage"> | string
    content?: StringWithAggregatesFilter<"LegalPage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LegalPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LegalPage"> | Date | string
  }

  export type TherapistProfileWhereInput = {
    AND?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    OR?: TherapistProfileWhereInput[]
    NOT?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    id?: StringFilter<"TherapistProfile"> | string
    fullName?: StringFilter<"TherapistProfile"> | string
    title?: StringNullableFilter<"TherapistProfile"> | string | null
    photo?: StringNullableFilter<"TherapistProfile"> | string | null
    shortBio?: StringNullableFilter<"TherapistProfile"> | string | null
    qualifications?: StringNullableListFilter<"TherapistProfile">
    specialisations?: StringNullableListFilter<"TherapistProfile">
    languages?: StringNullableListFilter<"TherapistProfile">
    approach?: StringNullableFilter<"TherapistProfile"> | string | null
    yearsExperience?: IntNullableFilter<"TherapistProfile"> | number | null
    registrationNo?: StringNullableFilter<"TherapistProfile"> | string | null
    createdAt?: DateTimeFilter<"TherapistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TherapistProfile"> | Date | string
  }

  export type TherapistProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    shortBio?: SortOrder
    qualifications?: SortOrder
    specialisations?: SortOrder
    languages?: SortOrder
    approach?: SortOrder
    yearsExperience?: SortOrder
    registrationNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    OR?: TherapistProfileWhereInput[]
    NOT?: TherapistProfileWhereInput | TherapistProfileWhereInput[]
    fullName?: StringFilter<"TherapistProfile"> | string
    title?: StringNullableFilter<"TherapistProfile"> | string | null
    photo?: StringNullableFilter<"TherapistProfile"> | string | null
    shortBio?: StringNullableFilter<"TherapistProfile"> | string | null
    qualifications?: StringNullableListFilter<"TherapistProfile">
    specialisations?: StringNullableListFilter<"TherapistProfile">
    languages?: StringNullableListFilter<"TherapistProfile">
    approach?: StringNullableFilter<"TherapistProfile"> | string | null
    yearsExperience?: IntNullableFilter<"TherapistProfile"> | number | null
    registrationNo?: StringNullableFilter<"TherapistProfile"> | string | null
    createdAt?: DateTimeFilter<"TherapistProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TherapistProfile"> | Date | string
  }, "id">

  export type TherapistProfileOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    shortBio?: SortOrder
    qualifications?: SortOrder
    specialisations?: SortOrder
    languages?: SortOrder
    approach?: SortOrder
    yearsExperience?: SortOrder
    registrationNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapistProfileCountOrderByAggregateInput
    _avg?: TherapistProfileAvgOrderByAggregateInput
    _max?: TherapistProfileMaxOrderByAggregateInput
    _min?: TherapistProfileMinOrderByAggregateInput
    _sum?: TherapistProfileSumOrderByAggregateInput
  }

  export type TherapistProfileScalarWhereWithAggregatesInput = {
    AND?: TherapistProfileScalarWhereWithAggregatesInput | TherapistProfileScalarWhereWithAggregatesInput[]
    OR?: TherapistProfileScalarWhereWithAggregatesInput[]
    NOT?: TherapistProfileScalarWhereWithAggregatesInput | TherapistProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TherapistProfile"> | string
    fullName?: StringWithAggregatesFilter<"TherapistProfile"> | string
    title?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
    photo?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
    shortBio?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
    qualifications?: StringNullableListFilter<"TherapistProfile">
    specialisations?: StringNullableListFilter<"TherapistProfile">
    languages?: StringNullableListFilter<"TherapistProfile">
    approach?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
    yearsExperience?: IntNullableWithAggregatesFilter<"TherapistProfile"> | number | null
    registrationNo?: StringNullableWithAggregatesFilter<"TherapistProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TherapistProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TherapistProfile"> | Date | string
  }

  export type SiteSettingsWhereInput = {
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    id?: StringFilter<"SiteSettings"> | string
    siteName?: StringFilter<"SiteSettings"> | string
    tagline?: StringNullableFilter<"SiteSettings"> | string | null
    metaDescription?: StringNullableFilter<"SiteSettings"> | string | null
    ogImage?: StringNullableFilter<"SiteSettings"> | string | null
    crisisNotice?: StringNullableFilter<"SiteSettings"> | string | null
    cookieConsentEnabled?: BoolFilter<"SiteSettings"> | boolean
    themePreset?: StringFilter<"SiteSettings"> | string
    fontPair?: StringFilter<"SiteSettings"> | string
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }

  export type SiteSettingsOrderByWithRelationInput = {
    id?: SortOrder
    siteName?: SortOrder
    tagline?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    crisisNotice?: SortOrder
    cookieConsentEnabled?: SortOrder
    themePreset?: SortOrder
    fontPair?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    OR?: SiteSettingsWhereInput[]
    NOT?: SiteSettingsWhereInput | SiteSettingsWhereInput[]
    siteName?: StringFilter<"SiteSettings"> | string
    tagline?: StringNullableFilter<"SiteSettings"> | string | null
    metaDescription?: StringNullableFilter<"SiteSettings"> | string | null
    ogImage?: StringNullableFilter<"SiteSettings"> | string | null
    crisisNotice?: StringNullableFilter<"SiteSettings"> | string | null
    cookieConsentEnabled?: BoolFilter<"SiteSettings"> | boolean
    themePreset?: StringFilter<"SiteSettings"> | string
    fontPair?: StringFilter<"SiteSettings"> | string
    createdAt?: DateTimeFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSettings"> | Date | string
  }, "id">

  export type SiteSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    siteName?: SortOrder
    tagline?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    crisisNotice?: SortOrder
    cookieConsentEnabled?: SortOrder
    themePreset?: SortOrder
    fontPair?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingsCountOrderByAggregateInput
    _max?: SiteSettingsMaxOrderByAggregateInput
    _min?: SiteSettingsMinOrderByAggregateInput
  }

  export type SiteSettingsScalarWhereWithAggregatesInput = {
    AND?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    OR?: SiteSettingsScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingsScalarWhereWithAggregatesInput | SiteSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteSettings"> | string
    siteName?: StringWithAggregatesFilter<"SiteSettings"> | string
    tagline?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    crisisNotice?: StringNullableWithAggregatesFilter<"SiteSettings"> | string | null
    cookieConsentEnabled?: BoolWithAggregatesFilter<"SiteSettings"> | boolean
    themePreset?: StringWithAggregatesFilter<"SiteSettings"> | string
    fontPair?: StringWithAggregatesFilter<"SiteSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSettings"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    bannerImage?: StringNullableFilter<"Event"> | string | null
    isActive?: BoolFilter<"Event"> | boolean
    order?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    images?: GalleryImageListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    bannerImage?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: GalleryImageOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    bannerImage?: StringNullableFilter<"Event"> | string | null
    isActive?: BoolFilter<"Event"> | boolean
    order?: IntFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    images?: GalleryImageListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    bannerImage?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    bannerImage?: StringNullableWithAggregatesFilter<"Event"> | string | null
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    order?: IntWithAggregatesFilter<"Event"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    eventId?: StringFilter<"GalleryImage"> | string
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    order?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    eventId?: StringFilter<"GalleryImage"> | string
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    order?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _avg?: GalleryImageAvgOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
    _sum?: GalleryImageSumOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryImage"> | string
    eventId?: StringWithAggregatesFilter<"GalleryImage"> | string
    imageUrl?: StringWithAggregatesFilter<"GalleryImage"> | string
    caption?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    order?: IntWithAggregatesFilter<"GalleryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: StringFilter<"Survey"> | string
    title?: StringFilter<"Survey"> | string
    slug?: StringFilter<"Survey"> | string
    description?: StringNullableFilter<"Survey"> | string | null
    isActive?: BoolFilter<"Survey"> | boolean
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    questions?: SurveyQuestionListRelationFilter
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: SurveyQuestionOrderByRelationAggregateInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    title?: StringFilter<"Survey"> | string
    description?: StringNullableFilter<"Survey"> | string | null
    isActive?: BoolFilter<"Survey"> | boolean
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    questions?: SurveyQuestionListRelationFilter
  }, "id" | "slug">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey"> | string
    title?: StringWithAggregatesFilter<"Survey"> | string
    slug?: StringWithAggregatesFilter<"Survey"> | string
    description?: StringNullableWithAggregatesFilter<"Survey"> | string | null
    isActive?: BoolWithAggregatesFilter<"Survey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
  }

  export type SurveyQuestionWhereInput = {
    AND?: SurveyQuestionWhereInput | SurveyQuestionWhereInput[]
    OR?: SurveyQuestionWhereInput[]
    NOT?: SurveyQuestionWhereInput | SurveyQuestionWhereInput[]
    id?: StringFilter<"SurveyQuestion"> | string
    surveyId?: StringFilter<"SurveyQuestion"> | string
    order?: IntFilter<"SurveyQuestion"> | number
    type?: StringFilter<"SurveyQuestion"> | string
    label?: StringFilter<"SurveyQuestion"> | string
    options?: StringNullableListFilter<"SurveyQuestion">
    required?: BoolFilter<"SurveyQuestion"> | boolean
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
  }

  export type SurveyQuestionOrderByWithRelationInput = {
    id?: SortOrder
    surveyId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    options?: SortOrder
    required?: SortOrder
    survey?: SurveyOrderByWithRelationInput
  }

  export type SurveyQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveyQuestionWhereInput | SurveyQuestionWhereInput[]
    OR?: SurveyQuestionWhereInput[]
    NOT?: SurveyQuestionWhereInput | SurveyQuestionWhereInput[]
    surveyId?: StringFilter<"SurveyQuestion"> | string
    order?: IntFilter<"SurveyQuestion"> | number
    type?: StringFilter<"SurveyQuestion"> | string
    label?: StringFilter<"SurveyQuestion"> | string
    options?: StringNullableListFilter<"SurveyQuestion">
    required?: BoolFilter<"SurveyQuestion"> | boolean
    survey?: XOR<SurveyRelationFilter, SurveyWhereInput>
  }, "id">

  export type SurveyQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    surveyId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    options?: SortOrder
    required?: SortOrder
    _count?: SurveyQuestionCountOrderByAggregateInput
    _avg?: SurveyQuestionAvgOrderByAggregateInput
    _max?: SurveyQuestionMaxOrderByAggregateInput
    _min?: SurveyQuestionMinOrderByAggregateInput
    _sum?: SurveyQuestionSumOrderByAggregateInput
  }

  export type SurveyQuestionScalarWhereWithAggregatesInput = {
    AND?: SurveyQuestionScalarWhereWithAggregatesInput | SurveyQuestionScalarWhereWithAggregatesInput[]
    OR?: SurveyQuestionScalarWhereWithAggregatesInput[]
    NOT?: SurveyQuestionScalarWhereWithAggregatesInput | SurveyQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SurveyQuestion"> | string
    surveyId?: StringWithAggregatesFilter<"SurveyQuestion"> | string
    order?: IntWithAggregatesFilter<"SurveyQuestion"> | number
    type?: StringWithAggregatesFilter<"SurveyQuestion"> | string
    label?: StringWithAggregatesFilter<"SurveyQuestion"> | string
    options?: StringNullableListFilter<"SurveyQuestion">
    required?: BoolWithAggregatesFilter<"SurveyQuestion"> | boolean
  }

  export type SurveyResponseWhereInput = {
    AND?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    OR?: SurveyResponseWhereInput[]
    NOT?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    id?: StringFilter<"SurveyResponse"> | string
    surveyId?: StringFilter<"SurveyResponse"> | string
    respondentName?: StringNullableFilter<"SurveyResponse"> | string | null
    respondentEmail?: StringNullableFilter<"SurveyResponse"> | string | null
    submittedAt?: DateTimeFilter<"SurveyResponse"> | Date | string
    answers?: SurveyAnswerListRelationFilter
  }

  export type SurveyResponseOrderByWithRelationInput = {
    id?: SortOrder
    surveyId?: SortOrder
    respondentName?: SortOrder
    respondentEmail?: SortOrder
    submittedAt?: SortOrder
    answers?: SurveyAnswerOrderByRelationAggregateInput
  }

  export type SurveyResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    OR?: SurveyResponseWhereInput[]
    NOT?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    surveyId?: StringFilter<"SurveyResponse"> | string
    respondentName?: StringNullableFilter<"SurveyResponse"> | string | null
    respondentEmail?: StringNullableFilter<"SurveyResponse"> | string | null
    submittedAt?: DateTimeFilter<"SurveyResponse"> | Date | string
    answers?: SurveyAnswerListRelationFilter
  }, "id">

  export type SurveyResponseOrderByWithAggregationInput = {
    id?: SortOrder
    surveyId?: SortOrder
    respondentName?: SortOrder
    respondentEmail?: SortOrder
    submittedAt?: SortOrder
    _count?: SurveyResponseCountOrderByAggregateInput
    _max?: SurveyResponseMaxOrderByAggregateInput
    _min?: SurveyResponseMinOrderByAggregateInput
  }

  export type SurveyResponseScalarWhereWithAggregatesInput = {
    AND?: SurveyResponseScalarWhereWithAggregatesInput | SurveyResponseScalarWhereWithAggregatesInput[]
    OR?: SurveyResponseScalarWhereWithAggregatesInput[]
    NOT?: SurveyResponseScalarWhereWithAggregatesInput | SurveyResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SurveyResponse"> | string
    surveyId?: StringWithAggregatesFilter<"SurveyResponse"> | string
    respondentName?: StringNullableWithAggregatesFilter<"SurveyResponse"> | string | null
    respondentEmail?: StringNullableWithAggregatesFilter<"SurveyResponse"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"SurveyResponse"> | Date | string
  }

  export type SurveyAnswerWhereInput = {
    AND?: SurveyAnswerWhereInput | SurveyAnswerWhereInput[]
    OR?: SurveyAnswerWhereInput[]
    NOT?: SurveyAnswerWhereInput | SurveyAnswerWhereInput[]
    id?: StringFilter<"SurveyAnswer"> | string
    responseId?: StringFilter<"SurveyAnswer"> | string
    questionId?: StringFilter<"SurveyAnswer"> | string
    value?: StringFilter<"SurveyAnswer"> | string
    response?: XOR<SurveyResponseRelationFilter, SurveyResponseWhereInput>
  }

  export type SurveyAnswerOrderByWithRelationInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    response?: SurveyResponseOrderByWithRelationInput
  }

  export type SurveyAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveyAnswerWhereInput | SurveyAnswerWhereInput[]
    OR?: SurveyAnswerWhereInput[]
    NOT?: SurveyAnswerWhereInput | SurveyAnswerWhereInput[]
    responseId?: StringFilter<"SurveyAnswer"> | string
    questionId?: StringFilter<"SurveyAnswer"> | string
    value?: StringFilter<"SurveyAnswer"> | string
    response?: XOR<SurveyResponseRelationFilter, SurveyResponseWhereInput>
  }, "id">

  export type SurveyAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
    _count?: SurveyAnswerCountOrderByAggregateInput
    _max?: SurveyAnswerMaxOrderByAggregateInput
    _min?: SurveyAnswerMinOrderByAggregateInput
  }

  export type SurveyAnswerScalarWhereWithAggregatesInput = {
    AND?: SurveyAnswerScalarWhereWithAggregatesInput | SurveyAnswerScalarWhereWithAggregatesInput[]
    OR?: SurveyAnswerScalarWhereWithAggregatesInput[]
    NOT?: SurveyAnswerScalarWhereWithAggregatesInput | SurveyAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SurveyAnswer"> | string
    responseId?: StringWithAggregatesFilter<"SurveyAnswer"> | string
    questionId?: StringWithAggregatesFilter<"SurveyAnswer"> | string
    value?: StringWithAggregatesFilter<"SurveyAnswer"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    tags?: StringNullableListFilter<"BlogPost">
    authorName?: StringNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    tags?: SortOrder
    authorName?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    tags?: StringNullableListFilter<"BlogPost">
    authorName?: StringNullableFilter<"BlogPost"> | string | null
    status?: StringFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    tags?: SortOrder
    authorName?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    tags?: StringNullableListFilter<"BlogPost">
    authorName?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: StringWithAggregatesFilter<"BlogPost"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarouselSlideCreateInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    image: string
    ctaText: string
    ctaLink?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarouselSlideUncheckedCreateInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    image: string
    ctaText: string
    ctaLink?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarouselSlideUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarouselSlideUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarouselSlideCreateManyInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    image: string
    ctaText: string
    ctaLink?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarouselSlideUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarouselSlideUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    ctaText?: StringFieldUpdateOperationsInput | string
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    slug: string
    shortDescription?: string | null
    description: string
    durationMinutes?: number | null
    priceLabel?: string | null
    modes?: ServiceCreatemodesInput | string[]
    image?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    shortDescription?: string | null
    description: string
    durationMinutes?: number | null
    priceLabel?: string | null
    modes?: ServiceCreatemodesInput | string[]
    image?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: ServiceUpdatemodesInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: ServiceUpdatemodesInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    slug: string
    shortDescription?: string | null
    description: string
    durationMinutes?: number | null
    priceLabel?: string | null
    modes?: ServiceCreatemodesInput | string[]
    image?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: ServiceUpdatemodesInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    modes?: ServiceUpdatemodesInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: string
    address: string
    phone: string
    email: string
    workingHours?: string | null
    mapEmbedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    address: string
    phone: string
    email: string
    workingHours?: string | null
    mapEmbedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    address: string
    phone: string
    email: string
    workingHours?: string | null
    mapEmbedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    source?: string
    status?: string
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    source?: string
    status?: string
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    source?: string
    status?: string
    adminNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    author: string
    content: string
    rating?: number
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    author: string
    content: string
    rating?: number
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    author: string
    content: string
    rating?: number
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    date: Date | string
    time: string
    service: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    date: Date | string
    time: string
    service: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    date: Date | string
    time: string
    service: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    description: string
    backgroundImage: string
    ctaText?: string | null
    ctaLink?: string | null
    textColor?: string
    overlayOpacity?: number
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    description: string
    backgroundImage: string
    ctaText?: string | null
    ctaLink?: string | null
    textColor?: string
    overlayOpacity?: number
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ctaText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: StringFieldUpdateOperationsInput | string
    overlayOpacity?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ctaText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: StringFieldUpdateOperationsInput | string
    overlayOpacity?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyInput = {
    id?: string
    title: string
    subtitle?: string | null
    description: string
    backgroundImage: string
    ctaText?: string | null
    ctaLink?: string | null
    textColor?: string
    overlayOpacity?: number
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ctaText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: StringFieldUpdateOperationsInput | string
    overlayOpacity?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ctaText?: NullableStringFieldUpdateOperationsInput | string | null
    ctaLink?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: StringFieldUpdateOperationsInput | string
    overlayOpacity?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    content: string
    image: string
    layout?: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUncheckedCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    content: string
    image: string
    layout?: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionCreateManyInput = {
    id?: string
    title: string
    subtitle?: string | null
    content: string
    image: string
    layout?: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutSectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutSectionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalPageCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalPageUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalPageUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalPageUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalPageCreateManyInput = {
    id?: string
    slug: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalPageUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalPageUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileCreateInput = {
    id?: string
    fullName: string
    title?: string | null
    photo?: string | null
    shortBio?: string | null
    qualifications?: TherapistProfileCreatequalificationsInput | string[]
    specialisations?: TherapistProfileCreatespecialisationsInput | string[]
    languages?: TherapistProfileCreatelanguagesInput | string[]
    approach?: string | null
    yearsExperience?: number | null
    registrationNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistProfileUncheckedCreateInput = {
    id?: string
    fullName: string
    title?: string | null
    photo?: string | null
    shortBio?: string | null
    qualifications?: TherapistProfileCreatequalificationsInput | string[]
    specialisations?: TherapistProfileCreatespecialisationsInput | string[]
    languages?: TherapistProfileCreatelanguagesInput | string[]
    approach?: string | null
    yearsExperience?: number | null
    registrationNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistProfileUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: TherapistProfileUpdatequalificationsInput | string[]
    specialisations?: TherapistProfileUpdatespecialisationsInput | string[]
    languages?: TherapistProfileUpdatelanguagesInput | string[]
    approach?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileUncheckedUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: TherapistProfileUpdatequalificationsInput | string[]
    specialisations?: TherapistProfileUpdatespecialisationsInput | string[]
    languages?: TherapistProfileUpdatelanguagesInput | string[]
    approach?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileCreateManyInput = {
    id?: string
    fullName: string
    title?: string | null
    photo?: string | null
    shortBio?: string | null
    qualifications?: TherapistProfileCreatequalificationsInput | string[]
    specialisations?: TherapistProfileCreatespecialisationsInput | string[]
    languages?: TherapistProfileCreatelanguagesInput | string[]
    approach?: string | null
    yearsExperience?: number | null
    registrationNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistProfileUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: TherapistProfileUpdatequalificationsInput | string[]
    specialisations?: TherapistProfileUpdatespecialisationsInput | string[]
    languages?: TherapistProfileUpdatelanguagesInput | string[]
    approach?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistProfileUncheckedUpdateManyInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    shortBio?: NullableStringFieldUpdateOperationsInput | string | null
    qualifications?: TherapistProfileUpdatequalificationsInput | string[]
    specialisations?: TherapistProfileUpdatespecialisationsInput | string[]
    languages?: TherapistProfileUpdatelanguagesInput | string[]
    approach?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateInput = {
    id?: string
    siteName?: string
    tagline?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    crisisNotice?: string | null
    cookieConsentEnabled?: boolean
    themePreset?: string
    fontPair?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUncheckedCreateInput = {
    id?: string
    siteName?: string
    tagline?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    crisisNotice?: string | null
    cookieConsentEnabled?: boolean
    themePreset?: string
    fontPair?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateInput = {
    siteName?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    crisisNotice?: NullableStringFieldUpdateOperationsInput | string | null
    cookieConsentEnabled?: BoolFieldUpdateOperationsInput | boolean
    themePreset?: StringFieldUpdateOperationsInput | string
    fontPair?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateInput = {
    siteName?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    crisisNotice?: NullableStringFieldUpdateOperationsInput | string | null
    cookieConsentEnabled?: BoolFieldUpdateOperationsInput | boolean
    themePreset?: StringFieldUpdateOperationsInput | string
    fontPair?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsCreateManyInput = {
    id?: string
    siteName?: string
    tagline?: string | null
    metaDescription?: string | null
    ogImage?: string | null
    crisisNotice?: string | null
    cookieConsentEnabled?: boolean
    themePreset?: string
    fontPair?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingsUpdateManyMutationInput = {
    siteName?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    crisisNotice?: NullableStringFieldUpdateOperationsInput | string | null
    cookieConsentEnabled?: BoolFieldUpdateOperationsInput | boolean
    themePreset?: StringFieldUpdateOperationsInput | string
    fontPair?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingsUncheckedUpdateManyInput = {
    siteName?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    crisisNotice?: NullableStringFieldUpdateOperationsInput | string | null
    cookieConsentEnabled?: BoolFieldUpdateOperationsInput | boolean
    themePreset?: StringFieldUpdateOperationsInput | string
    fontPair?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    slug: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    bannerImage?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GalleryImageCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    bannerImage?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GalleryImageUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GalleryImageUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GalleryImageUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    slug: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    bannerImage?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutImagesInput
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: string
    eventId: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutImagesNestedInput
  }

  export type GalleryImageUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: string
    eventId: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: SurveyQuestionCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: SurveyQuestionUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: SurveyQuestionUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: SurveyQuestionUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyQuestionCreateInput = {
    id?: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
    survey: SurveyCreateNestedOneWithoutQuestionsInput
  }

  export type SurveyQuestionUncheckedCreateInput = {
    id?: string
    surveyId: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
  }

  export type SurveyQuestionUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
    survey?: SurveyUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type SurveyQuestionUncheckedUpdateInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyQuestionCreateManyInput = {
    id?: string
    surveyId: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
  }

  export type SurveyQuestionUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyQuestionUncheckedUpdateManyInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyResponseCreateInput = {
    id?: string
    surveyId: string
    respondentName?: string | null
    respondentEmail?: string | null
    submittedAt?: Date | string
    answers?: SurveyAnswerCreateNestedManyWithoutResponseInput
  }

  export type SurveyResponseUncheckedCreateInput = {
    id?: string
    surveyId: string
    respondentName?: string | null
    respondentEmail?: string | null
    submittedAt?: Date | string
    answers?: SurveyAnswerUncheckedCreateNestedManyWithoutResponseInput
  }

  export type SurveyResponseUpdateInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: SurveyAnswerUpdateManyWithoutResponseNestedInput
  }

  export type SurveyResponseUncheckedUpdateInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: SurveyAnswerUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type SurveyResponseCreateManyInput = {
    id?: string
    surveyId: string
    respondentName?: string | null
    respondentEmail?: string | null
    submittedAt?: Date | string
  }

  export type SurveyResponseUpdateManyMutationInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyResponseUncheckedUpdateManyInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAnswerCreateInput = {
    id?: string
    questionId: string
    value: string
    response: SurveyResponseCreateNestedOneWithoutAnswersInput
  }

  export type SurveyAnswerUncheckedCreateInput = {
    id?: string
    responseId: string
    questionId: string
    value: string
  }

  export type SurveyAnswerUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    response?: SurveyResponseUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type SurveyAnswerUncheckedUpdateInput = {
    responseId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyAnswerCreateManyInput = {
    id?: string
    responseId: string
    questionId: string
    value: string
  }

  export type SurveyAnswerUpdateManyMutationInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyAnswerUncheckedUpdateManyInput = {
    responseId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: BlogPostCreatetagsInput | string[]
    authorName?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: BlogPostCreatetagsInput | string[]
    authorName?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogPostUpdatetagsInput | string[]
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogPostUpdatetagsInput | string[]
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: BlogPostCreatetagsInput | string[]
    authorName?: string | null
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogPostUpdatetagsInput | string[]
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogPostUpdatetagsInput | string[]
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CarouselSlideCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarouselSlideAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CarouselSlideMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarouselSlideMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarouselSlideSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    priceLabel?: SortOrder
    modes?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
    order?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    priceLabel?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    priceLabel?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    workingHours?: SortOrder
    mapEmbedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    workingHours?: SortOrder
    mapEmbedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    workingHours?: SortOrder
    mapEmbedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    source?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    time?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    time?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    time?: SortOrder
    service?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    backgroundImage?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    textColor?: SortOrder
    overlayOpacity?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    overlayOpacity?: SortOrder
    order?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    backgroundImage?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    textColor?: SortOrder
    overlayOpacity?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    backgroundImage?: SortOrder
    ctaText?: SortOrder
    ctaLink?: SortOrder
    textColor?: SortOrder
    overlayOpacity?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    overlayOpacity?: SortOrder
    order?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AboutSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    image?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AboutSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    image?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    image?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LegalPageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalPageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalPageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistProfileCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    shortBio?: SortOrder
    qualifications?: SortOrder
    specialisations?: SortOrder
    languages?: SortOrder
    approach?: SortOrder
    yearsExperience?: SortOrder
    registrationNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistProfileAvgOrderByAggregateInput = {
    yearsExperience?: SortOrder
  }

  export type TherapistProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    shortBio?: SortOrder
    approach?: SortOrder
    yearsExperience?: SortOrder
    registrationNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistProfileMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    shortBio?: SortOrder
    approach?: SortOrder
    yearsExperience?: SortOrder
    registrationNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistProfileSumOrderByAggregateInput = {
    yearsExperience?: SortOrder
  }

  export type SiteSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    tagline?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    crisisNotice?: SortOrder
    cookieConsentEnabled?: SortOrder
    themePreset?: SortOrder
    fontPair?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    tagline?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    crisisNotice?: SortOrder
    cookieConsentEnabled?: SortOrder
    themePreset?: SortOrder
    fontPair?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    tagline?: SortOrder
    metaDescription?: SortOrder
    ogImage?: SortOrder
    crisisNotice?: SortOrder
    cookieConsentEnabled?: SortOrder
    themePreset?: SortOrder
    fontPair?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type GalleryImageListRelationFilter = {
    every?: GalleryImageWhereInput
    some?: GalleryImageWhereInput
    none?: GalleryImageWhereInput
  }

  export type GalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    bannerImage?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    bannerImage?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    bannerImage?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SurveyQuestionListRelationFilter = {
    every?: SurveyQuestionWhereInput
    some?: SurveyQuestionWhereInput
    none?: SurveyQuestionWhereInput
  }

  export type SurveyQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurveyRelationFilter = {
    is?: SurveyWhereInput
    isNot?: SurveyWhereInput
  }

  export type SurveyQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    options?: SortOrder
    required?: SortOrder
  }

  export type SurveyQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SurveyQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
  }

  export type SurveyQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    order?: SortOrder
    type?: SortOrder
    label?: SortOrder
    required?: SortOrder
  }

  export type SurveyQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SurveyAnswerListRelationFilter = {
    every?: SurveyAnswerWhereInput
    some?: SurveyAnswerWhereInput
    none?: SurveyAnswerWhereInput
  }

  export type SurveyAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyResponseCountOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    respondentName?: SortOrder
    respondentEmail?: SortOrder
    submittedAt?: SortOrder
  }

  export type SurveyResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    respondentName?: SortOrder
    respondentEmail?: SortOrder
    submittedAt?: SortOrder
  }

  export type SurveyResponseMinOrderByAggregateInput = {
    id?: SortOrder
    surveyId?: SortOrder
    respondentName?: SortOrder
    respondentEmail?: SortOrder
    submittedAt?: SortOrder
  }

  export type SurveyResponseRelationFilter = {
    is?: SurveyResponseWhereInput
    isNot?: SurveyResponseWhereInput
  }

  export type SurveyAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
  }

  export type SurveyAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
  }

  export type SurveyAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    value?: SortOrder
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    tags?: SortOrder
    authorName?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    authorName?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    authorName?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceCreatemodesInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ServiceUpdatemodesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TherapistProfileCreatequalificationsInput = {
    set: string[]
  }

  export type TherapistProfileCreatespecialisationsInput = {
    set: string[]
  }

  export type TherapistProfileCreatelanguagesInput = {
    set: string[]
  }

  export type TherapistProfileUpdatequalificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TherapistProfileUpdatespecialisationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TherapistProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GalleryImageCreateNestedManyWithoutEventInput = {
    create?: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput> | GalleryImageCreateWithoutEventInput[] | GalleryImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutEventInput | GalleryImageCreateOrConnectWithoutEventInput[]
    createMany?: GalleryImageCreateManyEventInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type GalleryImageUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput> | GalleryImageCreateWithoutEventInput[] | GalleryImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutEventInput | GalleryImageCreateOrConnectWithoutEventInput[]
    createMany?: GalleryImageCreateManyEventInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type GalleryImageUpdateManyWithoutEventNestedInput = {
    create?: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput> | GalleryImageCreateWithoutEventInput[] | GalleryImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutEventInput | GalleryImageCreateOrConnectWithoutEventInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutEventInput | GalleryImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GalleryImageCreateManyEventInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutEventInput | GalleryImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutEventInput | GalleryImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type GalleryImageUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput> | GalleryImageCreateWithoutEventInput[] | GalleryImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutEventInput | GalleryImageCreateOrConnectWithoutEventInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutEventInput | GalleryImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GalleryImageCreateManyEventInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutEventInput | GalleryImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutEventInput | GalleryImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutImagesInput = {
    create?: XOR<EventCreateWithoutImagesInput, EventUncheckedCreateWithoutImagesInput>
    connectOrCreate?: EventCreateOrConnectWithoutImagesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<EventCreateWithoutImagesInput, EventUncheckedCreateWithoutImagesInput>
    connectOrCreate?: EventCreateOrConnectWithoutImagesInput
    upsert?: EventUpsertWithoutImagesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutImagesInput, EventUpdateWithoutImagesInput>, EventUncheckedUpdateWithoutImagesInput>
  }

  export type SurveyQuestionCreateNestedManyWithoutSurveyInput = {
    create?: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput> | SurveyQuestionCreateWithoutSurveyInput[] | SurveyQuestionUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: SurveyQuestionCreateOrConnectWithoutSurveyInput | SurveyQuestionCreateOrConnectWithoutSurveyInput[]
    createMany?: SurveyQuestionCreateManySurveyInputEnvelope
    connect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
  }

  export type SurveyQuestionUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput> | SurveyQuestionCreateWithoutSurveyInput[] | SurveyQuestionUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: SurveyQuestionCreateOrConnectWithoutSurveyInput | SurveyQuestionCreateOrConnectWithoutSurveyInput[]
    createMany?: SurveyQuestionCreateManySurveyInputEnvelope
    connect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
  }

  export type SurveyQuestionUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput> | SurveyQuestionCreateWithoutSurveyInput[] | SurveyQuestionUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: SurveyQuestionCreateOrConnectWithoutSurveyInput | SurveyQuestionCreateOrConnectWithoutSurveyInput[]
    upsert?: SurveyQuestionUpsertWithWhereUniqueWithoutSurveyInput | SurveyQuestionUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: SurveyQuestionCreateManySurveyInputEnvelope
    set?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    disconnect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    delete?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    connect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    update?: SurveyQuestionUpdateWithWhereUniqueWithoutSurveyInput | SurveyQuestionUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: SurveyQuestionUpdateManyWithWhereWithoutSurveyInput | SurveyQuestionUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: SurveyQuestionScalarWhereInput | SurveyQuestionScalarWhereInput[]
  }

  export type SurveyQuestionUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput> | SurveyQuestionCreateWithoutSurveyInput[] | SurveyQuestionUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: SurveyQuestionCreateOrConnectWithoutSurveyInput | SurveyQuestionCreateOrConnectWithoutSurveyInput[]
    upsert?: SurveyQuestionUpsertWithWhereUniqueWithoutSurveyInput | SurveyQuestionUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: SurveyQuestionCreateManySurveyInputEnvelope
    set?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    disconnect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    delete?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    connect?: SurveyQuestionWhereUniqueInput | SurveyQuestionWhereUniqueInput[]
    update?: SurveyQuestionUpdateWithWhereUniqueWithoutSurveyInput | SurveyQuestionUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: SurveyQuestionUpdateManyWithWhereWithoutSurveyInput | SurveyQuestionUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: SurveyQuestionScalarWhereInput | SurveyQuestionScalarWhereInput[]
  }

  export type SurveyQuestionCreateoptionsInput = {
    set: string[]
  }

  export type SurveyCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutQuestionsInput
    connect?: SurveyWhereUniqueInput
  }

  export type SurveyQuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SurveyUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutQuestionsInput
    upsert?: SurveyUpsertWithoutQuestionsInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutQuestionsInput, SurveyUpdateWithoutQuestionsInput>, SurveyUncheckedUpdateWithoutQuestionsInput>
  }

  export type SurveyAnswerCreateNestedManyWithoutResponseInput = {
    create?: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput> | SurveyAnswerCreateWithoutResponseInput[] | SurveyAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: SurveyAnswerCreateOrConnectWithoutResponseInput | SurveyAnswerCreateOrConnectWithoutResponseInput[]
    createMany?: SurveyAnswerCreateManyResponseInputEnvelope
    connect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
  }

  export type SurveyAnswerUncheckedCreateNestedManyWithoutResponseInput = {
    create?: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput> | SurveyAnswerCreateWithoutResponseInput[] | SurveyAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: SurveyAnswerCreateOrConnectWithoutResponseInput | SurveyAnswerCreateOrConnectWithoutResponseInput[]
    createMany?: SurveyAnswerCreateManyResponseInputEnvelope
    connect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
  }

  export type SurveyAnswerUpdateManyWithoutResponseNestedInput = {
    create?: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput> | SurveyAnswerCreateWithoutResponseInput[] | SurveyAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: SurveyAnswerCreateOrConnectWithoutResponseInput | SurveyAnswerCreateOrConnectWithoutResponseInput[]
    upsert?: SurveyAnswerUpsertWithWhereUniqueWithoutResponseInput | SurveyAnswerUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: SurveyAnswerCreateManyResponseInputEnvelope
    set?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    disconnect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    delete?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    connect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    update?: SurveyAnswerUpdateWithWhereUniqueWithoutResponseInput | SurveyAnswerUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: SurveyAnswerUpdateManyWithWhereWithoutResponseInput | SurveyAnswerUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: SurveyAnswerScalarWhereInput | SurveyAnswerScalarWhereInput[]
  }

  export type SurveyAnswerUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput> | SurveyAnswerCreateWithoutResponseInput[] | SurveyAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: SurveyAnswerCreateOrConnectWithoutResponseInput | SurveyAnswerCreateOrConnectWithoutResponseInput[]
    upsert?: SurveyAnswerUpsertWithWhereUniqueWithoutResponseInput | SurveyAnswerUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: SurveyAnswerCreateManyResponseInputEnvelope
    set?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    disconnect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    delete?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    connect?: SurveyAnswerWhereUniqueInput | SurveyAnswerWhereUniqueInput[]
    update?: SurveyAnswerUpdateWithWhereUniqueWithoutResponseInput | SurveyAnswerUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: SurveyAnswerUpdateManyWithWhereWithoutResponseInput | SurveyAnswerUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: SurveyAnswerScalarWhereInput | SurveyAnswerScalarWhereInput[]
  }

  export type SurveyResponseCreateNestedOneWithoutAnswersInput = {
    create?: XOR<SurveyResponseCreateWithoutAnswersInput, SurveyResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SurveyResponseCreateOrConnectWithoutAnswersInput
    connect?: SurveyResponseWhereUniqueInput
  }

  export type SurveyResponseUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<SurveyResponseCreateWithoutAnswersInput, SurveyResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SurveyResponseCreateOrConnectWithoutAnswersInput
    upsert?: SurveyResponseUpsertWithoutAnswersInput
    connect?: SurveyResponseWhereUniqueInput
    update?: XOR<XOR<SurveyResponseUpdateToOneWithWhereWithoutAnswersInput, SurveyResponseUpdateWithoutAnswersInput>, SurveyResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type BlogPostCreatetagsInput = {
    set: string[]
  }

  export type BlogPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type GalleryImageCreateWithoutEventInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type GalleryImageUncheckedCreateWithoutEventInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type GalleryImageCreateOrConnectWithoutEventInput = {
    where: GalleryImageWhereUniqueInput
    create: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput>
  }

  export type GalleryImageCreateManyEventInputEnvelope = {
    data: GalleryImageCreateManyEventInput | GalleryImageCreateManyEventInput[]
  }

  export type GalleryImageUpsertWithWhereUniqueWithoutEventInput = {
    where: GalleryImageWhereUniqueInput
    update: XOR<GalleryImageUpdateWithoutEventInput, GalleryImageUncheckedUpdateWithoutEventInput>
    create: XOR<GalleryImageCreateWithoutEventInput, GalleryImageUncheckedCreateWithoutEventInput>
  }

  export type GalleryImageUpdateWithWhereUniqueWithoutEventInput = {
    where: GalleryImageWhereUniqueInput
    data: XOR<GalleryImageUpdateWithoutEventInput, GalleryImageUncheckedUpdateWithoutEventInput>
  }

  export type GalleryImageUpdateManyWithWhereWithoutEventInput = {
    where: GalleryImageScalarWhereInput
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyWithoutEventInput>
  }

  export type GalleryImageScalarWhereInput = {
    AND?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    OR?: GalleryImageScalarWhereInput[]
    NOT?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    eventId?: StringFilter<"GalleryImage"> | string
    imageUrl?: StringFilter<"GalleryImage"> | string
    caption?: StringNullableFilter<"GalleryImage"> | string | null
    order?: IntFilter<"GalleryImage"> | number
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type EventCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    bannerImage?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    bannerImage?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutImagesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutImagesInput, EventUncheckedCreateWithoutImagesInput>
  }

  export type EventUpsertWithoutImagesInput = {
    update: XOR<EventUpdateWithoutImagesInput, EventUncheckedUpdateWithoutImagesInput>
    create: XOR<EventCreateWithoutImagesInput, EventUncheckedCreateWithoutImagesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutImagesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutImagesInput, EventUncheckedUpdateWithoutImagesInput>
  }

  export type EventUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyQuestionCreateWithoutSurveyInput = {
    id?: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
  }

  export type SurveyQuestionUncheckedCreateWithoutSurveyInput = {
    id?: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
  }

  export type SurveyQuestionCreateOrConnectWithoutSurveyInput = {
    where: SurveyQuestionWhereUniqueInput
    create: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyQuestionCreateManySurveyInputEnvelope = {
    data: SurveyQuestionCreateManySurveyInput | SurveyQuestionCreateManySurveyInput[]
  }

  export type SurveyQuestionUpsertWithWhereUniqueWithoutSurveyInput = {
    where: SurveyQuestionWhereUniqueInput
    update: XOR<SurveyQuestionUpdateWithoutSurveyInput, SurveyQuestionUncheckedUpdateWithoutSurveyInput>
    create: XOR<SurveyQuestionCreateWithoutSurveyInput, SurveyQuestionUncheckedCreateWithoutSurveyInput>
  }

  export type SurveyQuestionUpdateWithWhereUniqueWithoutSurveyInput = {
    where: SurveyQuestionWhereUniqueInput
    data: XOR<SurveyQuestionUpdateWithoutSurveyInput, SurveyQuestionUncheckedUpdateWithoutSurveyInput>
  }

  export type SurveyQuestionUpdateManyWithWhereWithoutSurveyInput = {
    where: SurveyQuestionScalarWhereInput
    data: XOR<SurveyQuestionUpdateManyMutationInput, SurveyQuestionUncheckedUpdateManyWithoutSurveyInput>
  }

  export type SurveyQuestionScalarWhereInput = {
    AND?: SurveyQuestionScalarWhereInput | SurveyQuestionScalarWhereInput[]
    OR?: SurveyQuestionScalarWhereInput[]
    NOT?: SurveyQuestionScalarWhereInput | SurveyQuestionScalarWhereInput[]
    id?: StringFilter<"SurveyQuestion"> | string
    surveyId?: StringFilter<"SurveyQuestion"> | string
    order?: IntFilter<"SurveyQuestion"> | number
    type?: StringFilter<"SurveyQuestion"> | string
    label?: StringFilter<"SurveyQuestion"> | string
    options?: StringNullableListFilter<"SurveyQuestion">
    required?: BoolFilter<"SurveyQuestion"> | boolean
  }

  export type SurveyCreateWithoutQuestionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SurveyCreateOrConnectWithoutQuestionsInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
  }

  export type SurveyUpsertWithoutQuestionsInput = {
    update: XOR<SurveyUpdateWithoutQuestionsInput, SurveyUncheckedUpdateWithoutQuestionsInput>
    create: XOR<SurveyCreateWithoutQuestionsInput, SurveyUncheckedCreateWithoutQuestionsInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutQuestionsInput, SurveyUncheckedUpdateWithoutQuestionsInput>
  }

  export type SurveyUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyUncheckedUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyAnswerCreateWithoutResponseInput = {
    id?: string
    questionId: string
    value: string
  }

  export type SurveyAnswerUncheckedCreateWithoutResponseInput = {
    id?: string
    questionId: string
    value: string
  }

  export type SurveyAnswerCreateOrConnectWithoutResponseInput = {
    where: SurveyAnswerWhereUniqueInput
    create: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput>
  }

  export type SurveyAnswerCreateManyResponseInputEnvelope = {
    data: SurveyAnswerCreateManyResponseInput | SurveyAnswerCreateManyResponseInput[]
  }

  export type SurveyAnswerUpsertWithWhereUniqueWithoutResponseInput = {
    where: SurveyAnswerWhereUniqueInput
    update: XOR<SurveyAnswerUpdateWithoutResponseInput, SurveyAnswerUncheckedUpdateWithoutResponseInput>
    create: XOR<SurveyAnswerCreateWithoutResponseInput, SurveyAnswerUncheckedCreateWithoutResponseInput>
  }

  export type SurveyAnswerUpdateWithWhereUniqueWithoutResponseInput = {
    where: SurveyAnswerWhereUniqueInput
    data: XOR<SurveyAnswerUpdateWithoutResponseInput, SurveyAnswerUncheckedUpdateWithoutResponseInput>
  }

  export type SurveyAnswerUpdateManyWithWhereWithoutResponseInput = {
    where: SurveyAnswerScalarWhereInput
    data: XOR<SurveyAnswerUpdateManyMutationInput, SurveyAnswerUncheckedUpdateManyWithoutResponseInput>
  }

  export type SurveyAnswerScalarWhereInput = {
    AND?: SurveyAnswerScalarWhereInput | SurveyAnswerScalarWhereInput[]
    OR?: SurveyAnswerScalarWhereInput[]
    NOT?: SurveyAnswerScalarWhereInput | SurveyAnswerScalarWhereInput[]
    id?: StringFilter<"SurveyAnswer"> | string
    responseId?: StringFilter<"SurveyAnswer"> | string
    questionId?: StringFilter<"SurveyAnswer"> | string
    value?: StringFilter<"SurveyAnswer"> | string
  }

  export type SurveyResponseCreateWithoutAnswersInput = {
    id?: string
    surveyId: string
    respondentName?: string | null
    respondentEmail?: string | null
    submittedAt?: Date | string
  }

  export type SurveyResponseUncheckedCreateWithoutAnswersInput = {
    id?: string
    surveyId: string
    respondentName?: string | null
    respondentEmail?: string | null
    submittedAt?: Date | string
  }

  export type SurveyResponseCreateOrConnectWithoutAnswersInput = {
    where: SurveyResponseWhereUniqueInput
    create: XOR<SurveyResponseCreateWithoutAnswersInput, SurveyResponseUncheckedCreateWithoutAnswersInput>
  }

  export type SurveyResponseUpsertWithoutAnswersInput = {
    update: XOR<SurveyResponseUpdateWithoutAnswersInput, SurveyResponseUncheckedUpdateWithoutAnswersInput>
    create: XOR<SurveyResponseCreateWithoutAnswersInput, SurveyResponseUncheckedCreateWithoutAnswersInput>
    where?: SurveyResponseWhereInput
  }

  export type SurveyResponseUpdateToOneWithWhereWithoutAnswersInput = {
    where?: SurveyResponseWhereInput
    data: XOR<SurveyResponseUpdateWithoutAnswersInput, SurveyResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type SurveyResponseUpdateWithoutAnswersInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyResponseUncheckedUpdateWithoutAnswersInput = {
    surveyId?: StringFieldUpdateOperationsInput | string
    respondentName?: NullableStringFieldUpdateOperationsInput | string | null
    respondentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyEventInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type GalleryImageUpdateWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyWithoutEventInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurveyQuestionCreateManySurveyInput = {
    id?: string
    order?: number
    type: string
    label: string
    options?: SurveyQuestionCreateoptionsInput | string[]
    required?: boolean
  }

  export type SurveyQuestionUpdateWithoutSurveyInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyQuestionUncheckedUpdateWithoutSurveyInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyQuestionUncheckedUpdateManyWithoutSurveyInput = {
    order?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    options?: SurveyQuestionUpdateoptionsInput | string[]
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SurveyAnswerCreateManyResponseInput = {
    id?: string
    questionId: string
    value: string
  }

  export type SurveyAnswerUpdateWithoutResponseInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyAnswerUncheckedUpdateWithoutResponseInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyAnswerUncheckedUpdateManyWithoutResponseInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyCountOutputTypeDefaultArgs instead
     */
    export type SurveyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyResponseCountOutputTypeDefaultArgs instead
     */
    export type SurveyResponseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyResponseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarouselSlideDefaultArgs instead
     */
    export type CarouselSlideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarouselSlideDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactInfoDefaultArgs instead
     */
    export type ContactInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnquiryDefaultArgs instead
     */
    export type EnquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnquiryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentDefaultArgs instead
     */
    export type ContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutSectionDefaultArgs instead
     */
    export type AboutSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegalPageDefaultArgs instead
     */
    export type LegalPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegalPageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TherapistProfileDefaultArgs instead
     */
    export type TherapistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TherapistProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteSettingsDefaultArgs instead
     */
    export type SiteSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryImageDefaultArgs instead
     */
    export type GalleryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyDefaultArgs instead
     */
    export type SurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyQuestionDefaultArgs instead
     */
    export type SurveyQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyResponseDefaultArgs instead
     */
    export type SurveyResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyAnswerDefaultArgs instead
     */
    export type SurveyAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyAnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogPostDefaultArgs instead
     */
    export type BlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogPostDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}