document.addEventListener('DOMContentLoaded', () => {
   
    const submitButton = document.getElementById('submit');
    
    if (submitButton) {
        submitButton.addEventListener('click', calculateResult);
    }


    
    function calculateResult() {
        let answers = document.querySelectorAll('input[type="radio"]:checked');
        
        if (answers.length < 8) { 
            alert('Please answer all the questions!');
            return;
        }

       
        let genreCounts = {
            romance: 0,
            scifi: 0,
            horror: 0,
            drama: 0,
            action: 0,
            comedy: 0
        };

     
        answers.forEach(answer => {
            genreCounts[answer.value]++;
        });

     
        
        let maxCount = Math.max(...Object.values(genreCounts));
        let preferredGenres = [];
        for (let genre in genreCounts) {
            if (genreCounts[genre] === maxCount) {
                preferredGenres.push(genre);
            }
        }

      
        const genreImages = {
            romance: [
                'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg',
                'https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg',
                'https://m.media-amazon.com/images/I/814fRqJ+AyL._AC_UF894,1000_QL80_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/b/b6/Pretty_woman_movie.jpg',
                'https://m.media-amazon.com/images/M/MV5BYWU3ZmFhYTktNzU4NS00ZTEyLTkwNTYtMWE1M2JjMTFmODVkXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/I/81l2cJ6rvjL._AC_UF894,1000_QL80_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/a/ad/One_Day_Poster.jpg',
                'https://m.media-amazon.com/images/M/MV5BZmQ5ZjZlMzMtODA1ZS00NTNiLWIzOTYtOTQyYjQ2YWQxMTA1XkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg',
                'https://m.media-amazon.com/images/I/712n+hhjX3L._AC_UF1000,1000_QL80_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_.jpg',




            ],
            scifi: [
                'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
                'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
                'https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s',
                'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg',
                'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMDQwNDY0M2MtOGFmNy00ZjI5LTkzN2ItMzg5M2IwZTZjY2MyXkEyXkFqcGc@._V1_.jpg',



            ],
            horror: [
                'https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg',
                'https://lbhspawprint.com/wp-content/uploads/2022/12/image0.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKBYR2wgLK65wLfkE5bWgc5IPwcM0cgh9dw&s',
                'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png',
                'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png',
                'https://m.media-amazon.com/images/M/MV5BMjFhZTcxOTktMzllMS00MzIzLWJhODEtZDU5YTFkNzRjZWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNzY0ODQ3MTMxN15BMl5BanBnXkFtZTgwMDkwNTg4NjE@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BOTViNDViNDgtNDc0Ny00NWZkLTljMzctYjgzNzI5MTYwZjJlXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX1000_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/4/4b/Rec_poster.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BZmFjNTE5NGQtNTEyYy00YzgwLWEzNGQtNDNhYTRmMDUxOTk4XkEyXkFqcGc@._V1_.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uVX6leLjFXjzl7PNtYgpEQ-Kbun8VWV9Zg&s',
            ],
            drama: [
                'https://upload.wikimedia.org/wikipedia/en/b/b2/Rain_Man_poster.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3aeH4quODDvLaY8PhMPgZWIfuxCgjrIaRg&s',
                'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
                'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11671_p_v8_ad.jpg',
                'https://granitebaytoday.org/wp-content/uploads/2020/03/little-women-607x900.jpg',
                'https://play-lh.googleusercontent.com/bd74_5pOTSmJmdY6-vhkHiuh7Q19-SImDevNhkLPRuWdRvikC2RzonkyznZ29Vs9l9QYg1FO6a2ixIltHIw',
                'https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg',
                'https://upload.wikimedia.org/wikipedia/en/1/11/Aftersun.jpg',
                'https://upload.wikimedia.org/wikipedia/en/9/93/Mystic_River_poster.jpg',
                'https://m.media-amazon.com/images/M/MV5BMTc2MzY0NDAwOF5BMl5BanBnXkFtZTcwMTE1Mzc4OA@@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZ2yH-4WM-JeShrwn4YdAyIP9hkguqlfbag&s',
                'https://m.media-amazon.com/images/M/MV5BMjI0MmFhY2QtZTliYi00OWM1LWE3NzMtNTZhNTQyYTFmY2IzXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg',
            ],
            action: [
                'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28363_p_v13_ab.jpg',
                'https://snworksceo.imgix.net/dpn-34s/65197ae6-e5a4-417d-a61e-4daf2cd444f7.sized-1000x1000.jpg?w=1000',
                'https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg',
                'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg',
                'https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/f/fd/Mr_and_Mrs_Smith_poster.png',
                'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg',
                'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi1arS70w_kXQTF-GctH3Vz_vXSLK3ZxHVQ&s',
                'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_FMjpg_UX1000_.jpg',

            ],
            comedy: [
                'https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/I/7164u1kaAUL._AC_UF1000,1000_QL80_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BOTQwYmRhNGQtODI2Mi00ZTRlLTk0Y2QtY2NkNjE1MGNhNTgwXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_.jpg',
                'https://m.media-amazon.com/images/S/pv-target-images/7e197485d80b40ecb08047b3e7dfe836a68f425bcaccd97edb125b02a47ebaac.jpg',
                'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16942_p_v12_ah.jpg',
                'https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg',
                'https://m.media-amazon.com/images/M/MV5BMzg4NDFjNmYtZjQxMy00MDY4LWEyZjUtYzRjNjNkNjJiZTZhXkEyXkFqcGc@._V1_.jpg',
                'https://upload.wikimedia.org/wikipedia/en/1/10/Fun_with_D_%26_J.jpg',
                'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19526_p_v8_az.jpg',
            ]
        };

        
        let resultDiv = document.getElementById('result');
        let resultImagesDiv = document.getElementById('resultImages');
        
        
        if (!resultImagesDiv) {
            alert("Result images container not found.");
            return;
        }

       
        resultImagesDiv.innerHTML = '';

        
        preferredGenres.forEach(genre => {
            if (genreImages[genre]) {
                genreImages[genre].forEach(imgSrc => {
                    let imgElement = document.createElement('img');
                    imgElement.src = imgSrc;
                    imgElement.alt = genre + ' movie';
                    resultImagesDiv.appendChild(imgElement);
                });
            } else {
                resultImagesDiv.innerHTML += `<p>No images available for ${genre}.</p>`;
            }
        });

        
        resultDiv.style.display = 'block';
    }
});

function showPopup() {
    alert("Katia Jacoby, a movie connoisseur, will not recommend a movie she has not seen and approved. She is known among her family and friends of Ohio to have the most elite taste in film. Do not take these recommendations with a grain of salt.");
}

function changeDisplay() {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
}
