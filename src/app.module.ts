import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { DragonModule } from './dragon/dragon.module';

@Module({
  imports: [HeroModule, DragonModule],
})
export class AppModule {}
