import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: number) {
    return this.articlesService.getArticle(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createArticle(@Body() article: Article) {
    return this.articlesService.saveArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  updateArticle(@Body() article: Article) {
    return this.articlesService.saveArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteArticle(@Param('id') id: number) {
    return this.articlesService.deleteArticle(id);
  }
}
