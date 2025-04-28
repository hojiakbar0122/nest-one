import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MashinesService } from './mashines.service';
import { CreateMashineDto } from './dto/create-mashine.dto';
import { UpdateMashineDto } from './dto/update-mashine.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mashines')
export class MashinesController {
  constructor(private readonly mashinesService: MashinesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() createMashineDto: CreateMashineDto, @UploadedFile() image:any) {
    return this.mashinesService.create(createMashineDto, image);
  }

  @Get()
  findAll() {
    return this.mashinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mashinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMashineDto: UpdateMashineDto) {
    return this.mashinesService.update(+id, updateMashineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mashinesService.remove(+id);
  }
}
