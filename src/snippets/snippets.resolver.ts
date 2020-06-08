import { Resolver, Int, Args, ResolveField, Parent, Query, Mutation } from "@nestjs/graphql";
import { Snippet } from "./schemas/snippet.schema";
import { SnippetsService } from "./snippets.service";
import { SnippetInput } from "./dto/snippet-input";
import { SnippetDeletedResult } from "./dto/deleted-snippet";


@Resolver(of => Snippet)
export class SnippetsResolver {
  constructor(
    private snippetsService: SnippetsService,
  ) {}

  @Query(() => [Snippet])
  async snippets() : Promise<Snippet[]> {
    const snippets = await this.snippetsService.findAll();
    return snippets.map(s => this.includePreviewText(s))
  }

  @Query(() => Snippet)
  async singleSnippet(@Args('id') id: string) : Promise<Snippet> {
    const snippet = await this.snippetsService.findOneById(id);
    return this.includePreviewText(snippet)
  }

  @Mutation(() => Snippet)
  async createItem(@Args('input') input: SnippetInput): Promise<Snippet> {
    return this.snippetsService.create(input);
  }

  @Mutation(() => Snippet)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: SnippetInput,
  ): Promise<Snippet> {
    return this.snippetsService.update(id, input);
  }

  @Mutation(returns => SnippetDeletedResult)
  async deleteItem(@Args('id') id: string): Promise<SnippetDeletedResult> {
    await this.snippetsService.delete(id);
    return new SnippetDeletedResult(id);
  }

  private includePreviewText(snippet: Snippet) : Snippet {
    snippet.preview = snippet.preview ?? snippet.content.substring(0, 100)
    return snippet
  }
  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}