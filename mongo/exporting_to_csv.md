Doc: https://www.mongodb.com/docs/database-tools/mongoexport/#export-in-csv-format

mongoexport --host localhost --db dbname --collection name --type=csv --out text.csv --fields firstName,middleName,lastName

So in our case

mongoexport --uri mongodb+srv://admin:vSrREjtTeU7wJY@cluster0.cg6nz.mongodb.net --db marxdb --collection register --type=csv --out register_export.csv --fields _id,reg_section

All the fields:

source,reprint,full_text,day_manual,num_chron_refs,lang_orig,any_date,writing_start_month,written,dubious,dated_day,type,cancelled,reg_section,posthumous,published,_id,ent_num,dated,french_title,scraped,month_combined,more_info,english_title,month_manual,spanish_title,pub_day,year_manual,writing_start_day,writing_end_day,writing_end_month,writing_end_year,notes,writing_end_approx,Chronicle_OCR,auth,translation,dated_month,day_combined,dated_year,pub_month,pub_year,writing_start_year,title,ent_id,Misc_Txt_Index,writing_start_approx,link,german_title,M_involved,year_combined,chron_refs,sampled

So

mongoexport --uri mongodb+srv://admin:vSrREjtTeU7wJY@cluster0.cg6nz.mongodb.net --db marxdb --collection register --type=csv --out register_export.csv --fields source,reprint,full_text,day_manual,num_chron_refs,lang_orig,any_date,writing_start_month,written,dubious,dated_day,type,cancelled,reg_section,posthumous,published,_id,ent_num,dated,french_title,scraped,month_combined,more_info,english_title,month_manual,spanish_title,pub_day,year_manual,writing_start_day,writing_end_day,writing_end_month,writing_end_year,notes,writing_end_approx,Chronicle_OCR,auth,translation,dated_month,day_combined,dated_year,pub_month,pub_year,writing_start_year,title,ent_id,Misc_Txt_Index,writing_start_approx,link,german_title,M_involved,year_combined,chron_refs,sampled

----

## For Chronicle

annos,at_created,chron_section,Notebooks_Marx,entry_id_clean,about,entry_id_base,E,start_approx,_id,meet,notes,published_in,reading,entry_id,writing,where,social_network,year,day_end,id,pub,not_in_chronicle,interaction_with,visit,labeled,manual_label,ME_Register,at_id,header,category,entry_num,month_start,travel,Register_ref,03_Register_auto,month_end,M,len,header_id,end_approx,book,meeting_of,read,ME_Register_auto,Entities,day_start,write,ME_Cyclopedia_id,text

Giving

```
mongoexport --uri mongodb+srv://admin:vSrREjtTeU7wJY@cluster0.cg6nz.mongodb.net --db marxdb --collection chronicle --type=csv --out chronicle_export.csv --fields annos,at_created,chron_section,Notebooks_Marx,entry_id_clean,about,entry_id_base,E,start_approx,_id,meet,notes,published_in,reading,entry_id,writing,where,social_network,year,day_end,id,pub,not_in_chronicle,interaction_with,visit,labeled,manual_label,ME_Register,at_id,header,category,entry_num,month_start,travel,Register_ref,03_Register_auto,month_end,M,len,header_id,end_approx,book,meeting_of,read,ME_Register_auto,Entities,day_start,write,ME_Cyclopedia_id,text
```