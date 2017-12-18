import { categories } from './categories';
import { rubriques } from './rubriques';
export let init = {
  obj:{
   "id_sp": '',
   "bibtex":'',
   "title": "test",
   "subtitle": '',
   "year": '',
   "month": '',
   "day": '',
   "date": '',
   "url_article_sp": '',
   "publisher": "Département des littératures de langue française",
   "prod": "Sens Public",
   "prodnum": "Sens Public",
   "diffnum": "Érudit",
   "rights": "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)",
   "issnnum": "2104-3272",
   "journal": "Sens public",
   "director": [
    {
     "forname": "Marcello",
     "surname": "Vitali-Rosati",
     "gender": "male",
     "orcid": "0000-0001-6424-3229",
     "viaf": '',
     "foaf": '',
     "isni": ''
    }
   ],
   "abstract": [
   ],
   "authors": [
   ],
   "dossier": [
    {
     "title": '',
     "id": ''
    }
   ],
   "redacteurDossier": [
   ],
   "typeArticle": [],
   "translator": [
    {
     "forname": '',
     "surname": ''
    }
   ],
   "lang": "fr",
   "orig_lang": '',
   "translations": [
    {
     "lang": '',
     "titre": '',
     "url": ''
    }
   ],
   "articleslies": [
    {
     "url": '',
     "titre": '',
     "auteur": ''
    }
   ],
   "reviewers": [
   ],
   "bibliography": '',
   "link-citations": true,
   "nocite": ''
 },
 misc:{
   rubriques:[...[],...rubriques],
   categories:[...[],...categories],
   uncontrolledKeywords:[]
 }
};
