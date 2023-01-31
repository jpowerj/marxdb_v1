export { };
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
var fs = require('fs');

const prisma = new PrismaClient();

async function seed() {

    fs.readdir(__dirname, (err: any, files: any) => {
        if (err)
            console.log(err);
        else {
            console.log("\nCurrent directory filenames:");
            files.forEach((file: any) => {
                console.log(file);
            })
        }
    })

    var fPath = __dirname + "/marx-db-reg-records.json";

    var regData = JSON.parse(fs.readFileSync(fPath, 'utf8'));
    var regRecords = regData.entries;
    var counter = 0;

    function undefVal(rec: any, prop: string) {
        return rec.hasOwnProperty(prop) ? rec[prop] : undefined;
    }

    function parseBoolean(boolStr: string | undefined) {
        if (boolStr === undefined) {
            return undefined;
        }
        return boolStr === 'true';
    }

    for (const regRecordKey of Object.keys(regRecords)) {
        var rec = regRecords[regRecordKey];
        var recObj = {
            id: regRecordKey,
            title: rec.title,
            entryNum: counter,
            fullText: rec.full_text,
            //chronRefs: defVal(rec, 'Chronicle_OCR', []),
            //chronRefs: [],
            mInvolved: rec.M_involved,
            anyDate: parseBoolean(undefVal(rec, 'any_date')),
            author: undefVal(rec, 'auth'),
            cancelled: parseBoolean(undefVal(rec, 'cancelled')),
            dated: undefVal(rec, 'dated'),
            datedDay: undefVal(rec, 'dated_day'),
            datedMonth: rec.dated_month,
            datedYear: rec.dated_year,
            dayCombined: rec.day_combined, dayManual: rec.day_manual,
            dubious: rec.dubious,
            englishTitle: rec.english_title,
            frenchTitle: rec.french_title,
            germanTitle: rec.german_title,
            langOrig: rec.lang_orig,
            link: rec.link,
            monthCombined: rec.month_combined, monthManual: rec.month_manual,
            moreInfo: rec.more_info,
            notes: rec.notes,
            posthumous: rec.posthumous,
            pubDay: rec.pub_day, pubMonth: rec.pub_month, pubYear: rec.pub_year,
            published: rec.published,
            regSection: rec.reg_section,
            reprint: rec.reprint,
            sampled: rec.sampled,
            scraped: rec.scraped,
            source: undefVal(rec, 'source'),
            spanishTitle: rec.spanish_title,
            translation: rec.translation,
            type: rec.type,
            writingEndApprox: rec.writing_end_approx, writingEndDay: rec.writing_end_day,
            writingEndMonth: rec.writing_end_month, writingEndYear: rec.writing_end_year,
            writingStartApprox: rec.writing_start_approx, writingStartDay: rec.writing_start_day,
            writingStartMonth: rec.writing_start_month, writingStartYear: rec.writing_start_year,
            written: undefVal(rec, 'written'),
            yearCombined: rec.year_combined, yearManual: rec.year_manual
        };
        console.log("Inserting " + rec.title);
        await prisma.docinfo.upsert({
            where: { id: recObj.id },
            update: recObj,
            create: recObj,
        });
        counter = counter + 1;
    }

    console.log(`Database has been seeded. 🌱`);
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
