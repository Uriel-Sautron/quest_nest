import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  saveArticle(article: Article) {
    return this.articlesRepository.save(article);
  }

  deleteArticle(id: number) {
    this.articlesRepository.delete(id);
    return;
  }

  getArticles() {
    return this.articlesRepository.find();
  }

  getArticle(id: number) {
    return this.articlesRepository.find({ where: [{ id }] });
  }
}
