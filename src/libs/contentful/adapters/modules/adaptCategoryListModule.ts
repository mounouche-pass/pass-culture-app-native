import { CategoryBlock, CategoryListModule, HomepageModuleType } from 'features/home/types'
import { buildImageUrl } from 'libs/contentful/adapters/helpers/buildImageUrl'
import { CategoryBlockContentModel, CategoryListContentModel } from 'libs/contentful/types'

export const adaptCategoryListModule = (module: CategoryListContentModel): CategoryListModule => {
  return {
    id: module.sys.id,
    type: HomepageModuleType.CategoryListModule,
    title: module.fields.title,
    categoryBlockList: adaptCategoryBlock(module.fields.categoryBlockList),
  }
}

const adaptCategoryBlock = (CategoryBlockList: CategoryBlockContentModel[]): CategoryBlock[] =>
  CategoryBlockList.filter((categoryBlock) => categoryBlock.fields).map((bloc) => ({
    id: bloc.sys.id,
    image: bloc.fields.image ? buildImageUrl(bloc.fields.image.fields.file.url) : undefined,
    homeEntryId: bloc.fields.homeEntryId,
    title: bloc.fields.title,
  }))